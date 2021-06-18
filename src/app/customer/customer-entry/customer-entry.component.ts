import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api/api.service";

@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.scss']
})
export class CustomerEntryComponent implements OnInit {
  customers: any;

  constructor(private readonly api: ApiService) { }

  ngOnInit(): void {
    this.api.getCustomers().subscribe(value => {
      console.log(value)
      this.customers = value
    })
  }

}
