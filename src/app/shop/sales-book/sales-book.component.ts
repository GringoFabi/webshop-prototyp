import { Component, OnInit } from '@angular/core';
import {ShopService} from "../shop.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sales-book',
  templateUrl: './sales-book.component.html',
  styleUrls: ['./sales-book.component.scss']
})
export class SalesBookComponent implements OnInit {
  sales: any[] = [];

  constructor(private readonly shopService: ShopService,
              private router: Router) { }

  ngOnInit(): void {
    this.sales = this.shopService.soldProducts;
  }

  calcTotal(): number {
    let sum = 0.0;
    for (let sale of this.sales) {
      sum += sale.price;
    }
    return sum;
  }
}
