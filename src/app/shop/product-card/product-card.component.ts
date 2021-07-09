import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShopService} from "../shop.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: any
  @Output('remove') remove = new EventEmitter<any>();

  editForm = new FormGroup({
    name: new FormControl('Product name'),
    description: new FormControl('Product description'),
    condition: new FormControl('Product condition'),
    price: new FormControl(0.00),
  });

  numbers: number[];

  constructor(private readonly shopService: ShopService) {
    this.numbers = Array(5).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {
    this.product.imageURLs = [];
    this.editForm.patchValue({
      name: this.product.name,
      description: this.product.description,
      condition: this.product.condition,
      price: this.product.price,
    })
  }

  removeProduct(product: any) {
    this.remove.emit(product);
  }

  fileChangeEvent(event: any) {
    const fileData = <File>event.target.files[0];
    this.addPreview(fileData)
  }

  private addPreview(fileData: File) {
    const reader = new FileReader();
    let imageUrl: string | ArrayBuffer | null = '';
    reader.readAsDataURL(fileData);
    reader.onload = (_event) => {
      imageUrl = reader.result;
      this.product.imageURLs.push(imageUrl);
    }
  }

  sellProduct(product: any) {
    this.shopService.sellProduct(product);
    this.removeProduct(product);
  }

  saveProduct() {
    const { name, description, condition, price } = this.editForm.value;
    this.product = {
      name,
      description,
      condition,
      price,
      imageURLs: this.product.imageURLs
    };
  }
}
