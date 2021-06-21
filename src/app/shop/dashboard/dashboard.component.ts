import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api/api.service";
import {ShopService} from "../shop.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  shops: any;

  constructor(private readonly apiService: ApiService,
              private readonly shopService: ShopService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.shopService.activeShop) {
      let activeShop = this.shopService.activeShop;
      this.apiService.getShopsByOwner(activeShop.owner).subscribe(value => {
        this.shops = value;
      });
    } else {
      const url = this.router.url;
      let lastIndexOf = url.lastIndexOf('/');
      const email = url.slice(lastIndexOf + 1, url.length);
      this.apiService.getShopsByEmail(email).subscribe(value => {
        this.shops = value;
      });
    }
  }

  openEditor(shop: any) {
    this.shopService.activeShop = shop;
    this.router.navigate([`/shop/edit/${shop.name}`])
  }
}
