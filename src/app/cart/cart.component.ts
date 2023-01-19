import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cartService } from '../services/http.cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product:any=[];
  public total!:number;


  constructor(public cart:cartService,private route:Router){}
  ngOnInit():void{
    this.cart.getProducts().subscribe(response=>{
      this.product=response;
      this.total=this.cart.getTotalPrice()/2;
    })
  }

public removeCartItem(item:any){
    this.cart.removeCartItem(item);
  }
public emptyCart(){
    this.cart.removeAllCartItems();

  }
public navigateToCheckout(){
    this.route.navigate(['checkout'])
  }
}
