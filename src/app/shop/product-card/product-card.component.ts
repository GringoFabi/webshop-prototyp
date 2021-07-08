import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ShopService} from "../shop.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: any
  @Output('remove') remove = new EventEmitter<any>();

  numbers: number[];

  constructor(private readonly shopService: ShopService) {
    this.numbers = Array(5).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {
    this.product.imageURLs = [];
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
}
