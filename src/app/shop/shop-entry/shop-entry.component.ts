import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {ShopService} from "../shop.service";

@Component({
  selector: 'app-shop-entry',
  templateUrl: './shop-entry.component.html',
  styleUrls: ['./shop-entry.component.scss']
})
export class ShopEntryComponent implements OnInit {

  shops: any;

  constructor(private readonly api: ApiService,
              private readonly router: Router,
              private shopService: ShopService) { }

  ngOnInit(): void {
    this.api.getShops().subscribe(value => {
      this.shops = value
    })
  }

  enterShopAsCustomer(shop: any) {
    this.shopService.activeShop = shop;
    this.router.navigate([`/shop/${shop.name}`])
  }

  enterShopAsOwner(shop: any) {
    this.shopService.activeShop = shop;
    this.router.navigate([`/shop/login`])
  }
}
