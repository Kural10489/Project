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
    // this.cart.products=this.cart.products+product;
    localStorage.setItem('products',JSON.stringify(this.cart.products));
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
