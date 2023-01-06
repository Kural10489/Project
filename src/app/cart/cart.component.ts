import { Component, OnInit } from '@angular/core';
import { cartService } from '../services/http.cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product:any=[];
  public total!:number;

  constructor(private cart:cartService){}
  ngOnInit():void{
    this.cart.getProducts().subscribe(response=>{
      this.product=response;
      // this.total=this.cart.getTotalPrice;

    })
  }
}
