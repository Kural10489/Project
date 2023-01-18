import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class cartService implements OnInit {

  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  public search=new BehaviorSubject<string>("");
  public totalItems!:number;
  public total=0;

  constructor(private http:HttpClient) {
    this.getProducts().subscribe(result=>{
      this.totalItems=result.length;

    })

  }

  ngOnInit(): void {}

  getProducts(){
    return this.productList.asObservable();
  }

  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice():number{

    this.cartItemList.map((a:any)=>{
      this.total+=a.price /2;
      

    })
     return this.total;

  }
  removeCartItem(product:any){
    this.cartItemList.map((currentProducts:any,index:any)=>{
      if(product.id===currentProducts.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCartItems(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }

}
