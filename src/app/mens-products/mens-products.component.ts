import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { cartService } from '../services/http.cart';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-mens-products',
  templateUrl: './mens-products.component.html',
  styleUrls: ['./mens-products.component.css']
})
export class MensProductsComponent {
  public searchKey:string='';
  public addedToCart:boolean=false;


  constructor(private http:HttpClient,public httpMethods:HttpService,public cart:cartService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
    // this.cart.getTotalPrice();

this.cart.search.subscribe(val=>{
  this.searchKey=val;
})

  }

  public addToCart(product:any){
    this.cart.productId=product.id;
    product.Quantity++;
    this.cart.productIds.push(product.id);
    // this.cart.totalCost.add(product.price);
    this.cart.totalCost.push(product.price);
    this.cart.addedToCart=true;
    this.cart.addtoCart(product);
  }

  removeCartItemCount(product:any){
    this.cart.removeCartItem(product);
    this.addedToCartToggle();
    // this.cart.productIds.splice(product.id,1);
    this.cart.productIds.shift();
    this.countDecrease(product);
  }
  addToCartCount(product:any){
    this.cart.addtoCart(product);
    this.cart.totalCost.push(product.price);
    this.countIncrease(product);
  }

  countIncrease(product:any){
    product.Quantity=product.Quantity+1

  }
  countDecrease(product:any){
    product.Quantity=product.Quantity-1

  }
  addedToCartToggle(){
    this.cart.addedToCart=!this.cart.addedToCart;
  }
}
