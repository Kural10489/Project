import { Component,Input } from '@angular/core';
import { cartService } from '../services/http.cart';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent {

  constructor(public http:HttpService,public cart:cartService){
    this.productDetails=this.http.productDetails
  }
  public addedToCart:boolean=false;
  public count=this.cart.totalItems;
  public productDetails:any;
  public productId!:number;
  public searchKey:string='';
@Input() products:any;


public addToCart(product:any){
  this.productId=product.id;
  this.addedToCart=true;
  this.cart.addtoCart(product);
}

public removeCartItemCount(product:any){
  this.cart.removeCartItem(product);
  this.addedToCartToggle();
  // this.cart.productIds.splice(product.id,1);
  this.cart.productIds.shift();
  this.countDecrease(product);
}
public addToCartCount(product:any){
  this.cart.addtoCart(product);
  this.cart.totalCost.push(product.price);
  this.countIncrease(product);
}
public countIncrease(product:any){
  product.Quantity=product.Quantity+1

}
public countDecrease(product:any){
  product.Quantity=product.Quantity-1

}
public addedToCartToggle(){
  this.cart.addedToCart=!this.cart.addedToCart;
}

}
