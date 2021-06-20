import { Component, OnInit } from '@angular/core';
import {ShopService} from "../shop.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop-owner',
  templateUrl: './shop-owner.component.html',
  styleUrls: ['./shop-owner.component.scss']
})
export class ShopOwnerComponent implements OnInit {
  shop: any;
  loginForm = new FormGroup({
    shopName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    stayLoggedIn: new FormControl(Boolean)
  })

  constructor(private readonly apiService: ApiService,
              private shopService: ShopService,
              private router: Router)
  { }

  ngOnInit(): void {
    if (this.shopService.activeShop) {
      this.shop = this.shopService.activeShop;
      console.log(this.shop)
    }
  }

  onSubmit() {
    const { shopName, email, password } = this.loginForm.value;
    if (shopName && email && password) {
      this.apiService.loginShopOwner(this.loginForm.value).subscribe(value => {
        this.router.navigate([`/shop/owner/${shopName}`])
      });
    }
  }
}
