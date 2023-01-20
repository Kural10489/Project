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
  public productId!:number;
  public productIds:number[]=[];
  public addedToCart:boolean=false;
  public total=0;
  public totalCost:number[]=[];

  constructor(private http:HttpClient) {
    this.getProducts().subscribe(result=>{
      this.totalItems=result.length;
      console.log(this.addedToCart);
      console.log(this.productIds);

    });

  }

  ngOnInit(): void {}

public getProducts(){
    return this.productList.asObservable();
  }

public addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    // this.getTotalPrice();
  }

// public getTotalPrice():number{

//     this.cartItemList.map((a:any)=>{
//       this.total+=a.price /4;
//     })
//      return this.total;

//   }
public getTotalPrice(){
  return this.totalCost.reduce((a,b)=>a+b)
}
public removeCartItem(product:any){
    this.cartItemList.map((currentProducts:any,index:any)=>{
      if(product.id===currentProducts.id){
        this.cartItemList.splice(index,1);
         // this.productIds.splice(product.id,1);
    this.productIds.shift();
      }
    })
    this.productList.next(this.cartItemList);
  }

public removeAllCartItems(){
    this.cartItemList=[];
    this.productIds=[];
    this.productList.next(this.cartItemList);
  }

public productIdCheck(productId:any){
return this.productIds.find((a)=>a===productId)
}
}
