import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {UiService} from '../../../../../services/ui.service';
import {ProductBrand} from '../../../../../interfaces/product-brand';
import {BrandService} from '../../../../../services/brand.service';
import {UtilsService} from '../../../../../services/utils.service';
import {StorageService} from '../../../../../services/storage.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpStatusCodeEnum} from '../../../../../enum/http-status-code';

@Component({
  selector: 'app-add-new-parent-category',
  templateUrl: './add-new-brand.component.html',
  styleUrls: ['./add-new-brand.component.scss']
})
export class AddNewBrandComponent implements OnInit, OnDestroy {

  // Form Template Ref
  @ViewChild('templateForm') templateForm: NgForm;


  dataForm?: FormGroup;
  private sub: Subscription;

  autoSlug = true;
  isLoading = false;

  // Store Data from param
  id?: string;
  brand: ProductBrand;

  // Image Holder
  placeholder = '/assets/images/avatar/image-upload.jpg';
  pickedImage?: string;


  // Destroy Session
  needSessionDestroy = true;


  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private uiService: UiService,
    private brandService: BrandService,
    private utilsService: UtilsService,
    private storageService: StorageService,
    public router: Router,
    private spinner: NgxSpinnerService,
  ) {
  }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      brandName: [null, Validators.required],
      brandSlug: [null, Validators.required],
      phoneNo: [null],
      email: [null, Validators.email],
      address: [null],
      image: [null],
    });

    this.pickedImage = this.placeholder;

    // Image From state
    if (!this.id) {
      if (this.storageService.getStoredInput('BRAND_INPUT')) {
        this.dataForm.patchValue(this.storageService.getStoredInput('BRAND_INPUT'));
      }

      if (history.state.images) {
        this.needSessionDestroy = true;
        this.pickedImage = history.state.images[0].url;
        this.dataForm.patchValue(
          {image: this.pickedImage}
        );
      }

    }

    this.autoGenerateSlug();

    // GET ID FORM PARAM
    this.activatedRoute.paramMap.subscribe((param) => {
      this.id = param.get('id');
      if (this.id) {
        this.getBrandByBrandID();
      }
    });


  }


  /**
   * SET FORM DATA
   */
  private setFormData() {
    this.dataForm.patchValue(this.brand);

    if (this.storageService.getStoredInput('BRAND_INPUT')) {
      this.dataForm.patchValue(this.storageService.getStoredInput('BRAND_INPUT'));
    }

    if (history.state.images) {
      this.needSessionDestroy = true;
      this.pickedImage = history.state.images[0].url;
      this.dataForm.patchValue(
        {image: this.pickedImage}
      );
    } else {
      this.pickedImage = this.brand.image ? this.brand.image : this.placeholder;
    }
  }


  onSubmit() {
    if (this.dataForm.invalid) {
      this.uiService.warn('Please complete all the required fields');
      return;
    }
    if (this.brand) {
      const finalData = {...this.dataForm.value, ...{_id: this.brand._id}};
      this.editBrandData(finalData);
    } else {
      this.addBrand(this.dataForm.value);
    }
  }

  autoGenerateSlug() {
    if (this.autoSlug === true) {
      this.sub = this.dataForm.get('brandName').valueChanges
        .pipe(
        ).subscribe(d => {
          const res = d?.trim().replace(/[^A-Z0-9]+/ig, '-').toLowerCase();
          this.dataForm.patchValue({
            brandSlug: res
          });
        });
    } else {
      if (this.sub === null || this.sub === undefined) {
        return;
      }
      this.sub.unsubscribe();
    }
  }

  /**
   * ON HOLD INPUT DATA
   */

  onHoldInputData() {
    this.needSessionDestroy = false;
    this.storageService.storeInputData(this.dataForm?.value, 'BRAND_INPUT');
  }


  /**
   * HTTP REQ HANDLE
   * GET ATTRIBUTES BY ID
   */

  private addBrand(data: ProductBrand) {
    this.spinner.show();
    this.brandService.addBrand(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.templateForm.resetForm();
        this.storageService.removeSessionData('BRAND_INPUT');
        this.pickedImage = this.placeholder;
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
        if (error.error.statusCode === HttpStatusCodeEnum.EXISTS_OR_NOT_ACCEPT) {
          this.dataForm.controls.brandName.setErrors({incorrect: true});
        }
      });
  }

  private getBrandByBrandID() {
    this.spinner.show();
    this.brandService.getBrandByBrandID(this.id)
      .subscribe(res => {
        this.brand = res.data;
        if (this.brand) {
          this.setFormData();
        }
        this.spinner.hide();
      }, error => {
        console.log(error);
      });
  }

  private editBrandData(data: ProductBrand) {
    this.spinner.show();
    this.brandService.editBrandData(data)
      .subscribe(res => {
        this.uiService.success(res.message);
        this.storageService.removeSessionData('BRAND_INPUT');
        this.spinner.hide();
      }, error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.needSessionDestroy) {
      this.storageService.removeSessionData('BRAND_INPUT');
    }
  }

}
