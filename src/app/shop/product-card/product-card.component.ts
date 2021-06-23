import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: any
  @Output('remove') remove = new EventEmitter<any>();

  constructor( ) {
  }

  ngOnInit(): void {
  }

  removeProduct(product: any) {
    this.remove.emit(product);
  }

}
