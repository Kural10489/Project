import { Component, OnInit } from '@angular/core';
import { cartService } from '../services/http.cart';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  public products=[];

  constructor(private cart:cartService,public http:HttpService){}
  ngOnInit(): void {
    this.http.getDispatchProductDetails();
    // this.http.getUserDetails();
  }
 

}

