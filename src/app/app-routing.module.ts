import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopEntryComponent} from "./shop/shop-entry/shop-entry.component";
import {CustomerEntryComponent} from "./customer/customer-entry/customer-entry.component";
import {HomeComponent} from "./home/home.component";
import {ShopPageComponent} from "./shop/shop-page/shop-page.component";
import {ShopOwnerComponent} from "./shop/shop-owner/shop-owner.component";
import {ShopEditComponent} from "./shop/shop-edit/shop-edit.component";
import {DashboardComponent} from "./shop/dashboard/dashboard.component";
import {SalesBookComponent} from "./shop/sales-book/sales-book.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'shop', component: ShopEntryComponent},
  { path: 'customer', component: CustomerEntryComponent},
  { path: 'shop/login', component: ShopOwnerComponent},
  { path: 'shop/:name', component: ShopPageComponent},
  { path: 'shop/owner/:shopName', component: ShopEditComponent},
  { path: 'shop/dashboard/:email', component: DashboardComponent},
  { path: 'shop/edit/:name', component: ShopEditComponent},
  { path: "shop/sales/:email", component: SalesBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
