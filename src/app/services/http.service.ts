import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {
 public productDetails:any;
 public userDetails:any;
 public DispatchProductsDetails:any;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.getUserDetails();
    this.productDetails=[];
    this.userDetails=[];
    this.DispatchProductsDetails=[];
    this.getProductDetais();
    this.getDispatchProductDetails();
  }
//getProductDetais()is to get all the products from the server
  getProductDetais(){
    this.http.get(`http://localhost:3000/products`).subscribe((result:any)=>{
      this.productDetails=result;

    })

  }

  getDispatchProductDetails(){
    return this.http.get<any>(`http://localhost:3000/Orders`).subscribe((result:any)=>{
    this.DispatchProductsDetails=result;
    });
  }

//getUserDetails()is to get all details of user from the server
    getUserDetails(){
      this.http.get(`http://localhost:3000/user`).subscribe(result=>{
        this.userDetails=result;
        console.log(result);

      })
    }

   
}
