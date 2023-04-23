import { Component, OnInit } from '@angular/core';
import { Iproducts } from './shared/model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  productArr :Iproducts[]=[
    {
      pName:"samsung",
      pDecsr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eveniet.",
      pCat :"product"
    },
    {
      pName:"samsung",
      pDecsr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eveniet.",
      pCat :"catlog"
    }
  ]
   
  addProduct(data :Iproducts){
 console.log(data);
 this.productArr.push(data)
  }
   
  // onclickBtn(pName:HTMLInputElement,pDecsr:HTMLTextAreaElement,pCat:"product"|"catlog"){
  //  let obj :Iproducts={
  //    pName: pName.value,
  //    pDecsr: pDecsr.value,
  //    pCat: pCat
  //  }
  //  console.log(obj);
  //  this.productArr.push(obj)

  //  pName.value=""
  //  pDecsr.value=""
   
  // }

  ngOnInit(): void {
   
  }

}
