import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {
 public productDetails:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.productDetails=[];
    this.getProductDetais();

  }

  getProductDetais(){

    this.http.get(`http://localhost:3000/products`).subscribe((result:any)=>{
      this.productDetails=result;
      console.log(result);

    })
    }
}
