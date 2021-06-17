import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopEntryComponent } from './shop/shop-entry/shop-entry.component';
import { CustomerEntryComponent } from './customer/customer-entry/customer-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopEntryComponent,
    CustomerEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
