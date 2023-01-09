import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { cartService } from '../services/http.cart';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-women-products',
  templateUrl: './women-products.component.html',
  styleUrls: ['./women-products.component.css']
})
export class WomenProductsComponent {
  constructor(private http:HttpClient,public httpMethods:HttpService,private cart:cartService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
this.cart.getTotalPrice();


  }

  addToCart(product:any){
    console.log(product);
    this.cart.addtoCart(product);
  }
}
