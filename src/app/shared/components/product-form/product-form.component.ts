import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iproducts } from '../../model/student';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {


@Output()  toAddProduct: EventEmitter<Iproducts> =new EventEmitter<Iproducts>()
  
   
  onclickBtn(pName:HTMLInputElement,pDecsr:HTMLTextAreaElement,pCat:"product"|"catlog"){
    let obj :Iproducts={
      pName: pName.value,
      pDecsr: pDecsr.value,
      pCat: pCat
    }
    console.log(obj);
    
 
    pName.value=""
    pDecsr.value=""
     this.toAddProduct.emit(obj)
   }

  constructor() { }

  ngOnInit(): void {
  }

}
