import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  activeShop: any;
  soldProducts: any[] = [];
  currentEmail = '';
  currentProducts: any[] = [];
  activeProduct: any;

  constructor() { }

  sellProduct(product: any) {
    product.soldAt = new Date();
    this.soldProducts.push(product);
  }
}
