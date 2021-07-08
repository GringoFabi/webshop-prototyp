import { Component, OnInit } from '@angular/core';
import {ShopService} from "../shop.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit {
  shop: any;
  products: any;
  messages: any;
  categories: any[] = [];

  shopEditForm = new FormGroup({
    description: new FormControl(''),
    owner : new FormControl('')
  });
  productForm = new FormGroup({
    productName: new FormControl('Product name'),
    productDescription: new FormControl('Product description'),
    productCondition: new FormControl('Product condition'),
    productPrice: new FormControl('Product price'),
  });
  messageForm = new FormGroup({
    messageText: new FormControl('enter your message'),
  });

  constructor(private apiService: ApiService,
              private readonly shopService: ShopService) { }

  ngOnInit(): void {
    if (this.shopService.activeShop) {
      this.shop = this.shopService.activeShop;
      this.shopEditForm.setValue({
        description: this.shop.description,
        owner: this.shop.owner
      })

      this.apiService.getProducts().subscribe(value => this.products = value);
      this.apiService.getMessages().subscribe(value => this.messages = value);
    }
  }

  onSubmit() {
    // todo
  }

  removeProduct(product: any) {
    for (let p of this.products) {
      if (p.name == product.name) {
        let index = this.products.indexOf(p, 0);
        this.products.splice(index, 1);
      }
    }
  }

  addNewProduct() {
    const {productName, productDescription, productCondition, productPrice} = this.productForm.value;
    let newProduct = {
      name: productName,
      description: productDescription,
      condition: productCondition,
      price: productPrice,
    };
    this.products.push(newProduct);
  }

  addNewMessage() {
    const {messageText} = this.messageForm.value;
    let newMessage = {
      text: messageText,
      date: new Date(),
    };
    this.messages.push(newMessage);
  }

  removeMessage(message: any) {
    for (let m of this.messages) {
      if (m.date == message.date) {
        let index = this.messages.indexOf(m, 0);
        this.messages.splice(index, 1);
      }
    }
  }

  onNewCategory(category: any) {
    this.categories.push(category);
  }
}
