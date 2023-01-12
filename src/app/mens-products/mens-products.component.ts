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


  constructor(private http:HttpClient,public httpMethods:HttpService,private cart:cartService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
    this.cart.getTotalPrice();

this.cart.search.subscribe(val=>{
  this.searchKey=val;
})

  }

  addToCart(product:any){
    console.log(product);
    this.cart.addtoCart(product);
  }
}
