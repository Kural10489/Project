import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { cartService } from '../services/http.cart';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
  public addedToCart:boolean=false;
  public productId!:number;
  public count=this.cart.totalItems;
  public product=[];
  public productidCheck=[];
  // search
  public searchKey:string='';

  constructor(private http:HttpClient,public httpMethods:HttpService,private cart:cartService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
    this.cart.getTotalPrice();

    this.cart.search.subscribe(val=>{
      this.searchKey=val;
    })

  }
 public addToCart(product:any){
    this.productId=product.id;
    this.addedToCart=true;
    this.cart.addtoCart(product);
  }
 public removeCartItem(item:any){
    this.cart.removeCartItem(item);
  }
}


