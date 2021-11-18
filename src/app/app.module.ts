import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './admin/pages/pages.component';
import { AdminAuthComponent } from './admin/admin-auth/admin-auth.component';
import { Header2Component } from './core/menu/header2/header2.component';
import { NgxSpinnerModule } from "ngx-spinner";

import {MatButtonModule} from '@angular/material/button';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthUserInterceptor} from "./auth-interceptor/auth-user.interceptor";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MaterialModule} from "./material/material.module";
import {PagesModule} from "./admin/pages/pages.module";
import {SharedModule} from './shared/shared.module';
import {AuthAdminInterceptor} from "./auth-interceptor/auth-admin.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AdminAuthComponent,
    Header2Component,
    // NgxSpinnerModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MaterialModule,
    PagesModule,
    SharedModule
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: ErrorHandleInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthUserInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthAdminInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
