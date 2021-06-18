import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api/api.service";

@Component({
  selector: 'app-shop-entry',
  templateUrl: './shop-entry.component.html',
  styleUrls: ['./shop-entry.component.scss']
})
export class ShopEntryComponent implements OnInit {

  shops: any;

  constructor(private readonly api: ApiService) { }

  ngOnInit(): void {
    this.api.getShops().subscribe(value => {
      this.shops = value
    })
  }
}
