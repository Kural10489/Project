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
  public productId!:number;

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
}
