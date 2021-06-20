import { Component, OnInit } from '@angular/core';
import {ShopService} from "../shop.service";

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  shop: any;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shop = this.shopService.activeShop;
  }

}
