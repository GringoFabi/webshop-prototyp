import { Component, OnInit } from '@angular/core';
import {ShopService} from "../shop.service";
import {ApiService} from "../../api/api.service";

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  shop: any;
  products: any;

  constructor(private apiService: ApiService,
              private shopService: ShopService) { }

  ngOnInit(): void {
    this.shop = this.shopService.activeShop;
    this.apiService.getProducts().subscribe(value => this.products = value);
  }

}
