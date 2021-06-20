import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopEntryComponent } from './shop/shop-entry/shop-entry.component';
import { CustomerEntryComponent } from './customer/customer-entry/customer-entry.component';
import { ApiModule } from "./api/api.module";
import { HttpClientModule } from "@angular/common/http";
import { ShopPageComponent } from './shop/shop-page/shop-page.component';
import { ShopOwnerComponent } from './shop/shop-owner/shop-owner.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ShopEditComponent } from './shop/shop-edit/shop-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopEntryComponent,
    CustomerEntryComponent,
    ShopPageComponent,
    ShopOwnerComponent,
    ShopEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ApiModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
