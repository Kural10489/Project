import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { cartService } from '../services/http.cart';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-women-products',
  templateUrl: './women-products.component.html',
  styleUrls: ['./women-products.component.css']
})
export class WomenProductsComponent {

  public addedToCart:boolean=false;
  public productId!:number;
  public count=this.cart.totalItems;
  public product=[];
  public productidCheck=[];
  public searchText:string='';
  // new
  public filter1:string=''
  public filter2:string=''
  public filter3:string=''
  constructor(private http:HttpClient,public httpMethods:HttpService,private cart:cartService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
    this.cart.getTotalPrice();



  }

  addToCart(product:any){
     this.countIncrement();
    this.productId=product.id;
    this.addedToCart=true;
    this.cart.addtoCart(product);
  }
  removeCartItem(item:any){
    this.countDecrement();
    this.cart.removeCartItem(item);
  }
  countIncrement(){
    this.count++;
  }
  countDecrement(){
    this.count--;

  }
 onSearchText(searchValue:any){
  this.searchText=searchValue;
  console.log(this.searchText);

 }





  // this.productidCheck.find(element=>element==this.productId)

  // getProductDetais(){
  //   this.http.get(`http://localhost:3000/products`).subscribe((result:any)=>{
  //     this.product=result;
  //     result.map((a:any)=>{
  //         // this.productidCheck.push(a.id);
  //         console.log(this.productidCheck);

  //     })

  //   })

  // }
}
