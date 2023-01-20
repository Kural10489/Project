import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { cartService } from '../services/http.cart';
import { HttpService } from '../services/http.service';
import { Price } from './price';
@Component({
  selector: 'app-women-products',
  templateUrl: './women-products.component.html',
  styleUrls: ['./women-products.component.css']
})
export class WomenProductsComponent {

  public count=this.cart.totalItems;
  public product=[];
  public productidCheck=[];
  // search
  public searchKey:string='';
  // new
  public filter1:string=''
  public filter2:string=''
  public filter3:string=''
  priceModel=new Price(false,false,false,false,false)
  price=500;

  constructor(private http:HttpClient,public httpMethods:HttpService,public cart:cartService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
    // this.cart.getTotalPrice();

    this.cart.search.subscribe(val=>{
      this.searchKey=val;
    })

  }

  addToCart(product:any){
    this.cart.productId=product.id;
    this.cart.productIds.push(product.id);
    this.cart.totalCost.push(product.price);
    this.cart.addedToCart=true;
    this.cart.addtoCart(product);
    this.countIncrease(product);
  }
  removeCartItem(item:any){
    this.cart.removeCartItem(item);
  }
  removeCartItemCount(product:any){
    this.cart.removeCartItem(product);
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

}
