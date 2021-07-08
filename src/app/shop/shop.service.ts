import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  activeShop: any;
  soldProducts: any[] = [];
  currentEmail = '';

  constructor() { }

  sellProduct(product: any) {
    this.soldProducts.push(product);
  }
}
