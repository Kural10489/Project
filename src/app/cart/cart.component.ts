import { HttpClient } from '@angular/common/http';
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
  public cartProducts=[this.cart.products];
  public productTitle=this.cartProducts.map(a=>a);
  constructor(public cart:cartService,private route:Router,private http:HttpClient){}
  ngOnInit():void{
    this.cart.getProducts().subscribe(response=>{
      this.product=response;
      console.log(this.cartProducts);

    })

  }

public removeCartItem(item:any){
    this.cart.removeCartItem(item);
  }
public emptyCart(){
    this.cart.removeAllCartItems();

  }
public navigateToCheckout(){
    const post=this.http.post(this.cart.baseUrl +"/Orders",this.product)
    post.subscribe();
    console.log(this.product);
    this.route.navigate(['checkout'])
  }

}
