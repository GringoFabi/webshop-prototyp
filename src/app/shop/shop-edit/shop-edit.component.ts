import {Component, OnInit} from '@angular/core';
import {ShopService} from "../shop.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

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
    productPrice: new FormControl(0.00),
  });
  messageForm = new FormGroup({
    messageText: new FormControl('enter your message'),
  });

  constructor(private apiService: ApiService,
              private readonly shopService: ShopService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.shopService.activeShop) {
      this.shop = this.shopService.activeShop;
      this.shopEditForm.setValue({
        description: this.shop.description,
        owner: this.shop.owner
      })

      this.apiService.getProducts().subscribe(value => {
        this.products = value.sort(this.sortByName);
        this.shopService.currentProducts = this.products;
      });
      this.apiService.getMessages().subscribe(value => this.messages = value);
    }
  }

  private sortByName(a: any, b: any) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

  onSubmit() {
    this.router.navigate([`/shop/dashboard/${this.shopService.currentEmail}`]);
  }

  removeProduct(product: any) {
    for (let p of this.products) {
      if (p.name == product.name) {
        let index = this.products.indexOf(p, 0);
        this.products.splice(index, 1);
        this.shopService.currentProducts = this.products;
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
    this.products = this.products.sort(this.sortByName);
    this.shopService.currentProducts = this.products;
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
