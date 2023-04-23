import { Component, Input, OnInit } from '@angular/core';
import { Iproducts } from '../../model/student';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
 @Input() getProduct! :Iproducts
bg: any;

  constructor() { }

  ngOnInit(): void {
  }

}
