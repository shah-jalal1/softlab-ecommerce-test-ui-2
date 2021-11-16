import { Component, OnInit } from '@angular/core';
import {Pagination} from "../../interfaces/pagination";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {CategoryService} from "../../services/category.service";
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // SUBSCRIPTION
  querySubscribe: Subscription;
  paramSubscribe: Subscription;
  subDataOne: Subscription;


  attributes: any[] = [];
  products: any[] = [];
  tags: any[] = [];

  // View Type
  viewType = 'grid';

  // Params
  categorySlug: string = null;
  subCategorySlug: string = null;
  brandSlug: string = null;
  brandId: string = null;

  // Price Range
  minPrice: number = null;
  maxPrice: number = null;
  rangeSet = false;
  priceRange: { min: number; max: number } = {min: 0, max: 0};
  minView = 0;
  maxView = 0;

  // Pagination
  currentPage = 1;
  totalProducts = 0;
  productsPerPage = 12;

  query: any[] = [];
  query2: any[] = [];
  query3: any[] = [];
  // {
  //   pageSize: this.productsPerPage,
  //   currentPage: this.currentPage
  // }
  paginate: Pagination = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    // private subCategoryService: SubCategoryService,
    // private attributeService: AttributeService,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  private getAllProduct() {
    const pagination: Pagination = {
      currentPage: String(this.currentPage),
      pageSize: String(this.productsPerPage)
    };
    this.productService.getAllProducts(pagination)
      .subscribe(res => {
        this.products = res.data;
        this.totalProducts = res.count;
        // const min = res.priceRange.minPrice;
        // const max = res.priceRange.maxPrice;
        if (this.totalProducts > 0) {
          this.priceRange.min = res.priceRange.minPrice;
          this.priceRange.max = res.priceRange.maxPrice;
          this.minView = res.priceRange.minPrice;
          this.maxView = res.priceRange.maxPrice;
        }
        // console.log(this.products);
      }, error => {
        console.log(error);
      });
  }

  public onChangePage(event: number) {
    this.router.navigate([], {queryParams: {page: event}});
    // this.router.navigate([], {queryParams: {page: 1}});
  }

}
