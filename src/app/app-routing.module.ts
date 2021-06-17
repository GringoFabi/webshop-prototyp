import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopEntryComponent} from "./shop/shop-entry/shop-entry.component";
import {CustomerEntryComponent} from "./customer/customer-entry/customer-entry.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'shop', component: ShopEntryComponent},
  { path: 'customer', component: CustomerEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
