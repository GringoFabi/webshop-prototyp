import { Component, OnInit } from '@angular/core';
import {ShopService} from "../shop.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit {
  shop: any;
  shopEditForm = new FormGroup({
    description: new FormControl(''),
    owner : new FormControl('')
  });

  constructor(private readonly shopService: ShopService) { }

  ngOnInit(): void {
    if (this.shopService.activeShop) {
      this.shop = this.shopService.activeShop;
      this.shopEditForm.setValue({
        description: this.shop.description,
        owner: this.shop.owner
      })
    }
  }

  onSubmit() {
    // todo
  }
}
