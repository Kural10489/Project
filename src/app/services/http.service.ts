import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {
 public productDetails:any;
 public userDetails:any;
 public mensProducts:any;
  isMensProducts: any;

  constructor(private http:HttpClient) {

    this.getUserDetails();
    this.getAllMensProducts();

   }

  ngOnInit(): void {
    this.productDetails=[];
    this.userDetails=[];
    this.mensProducts=[];
    this.getProductDetais();
  }

  getProductDetais(){
    this.http.get(`http://localhost:3000/products`).subscribe((result:any)=>{
      this.productDetails=result;
      console.log(result);

    })
    }
    getAllMensProducts(){
      this.http.get<any>(`http://localhost:3000/products`).subscribe(result=>{
        console.log(result);

         this.mensProducts=result.filter((a:any)=>{
           a.category=='M';
           console.log(this.mensProducts);
        })
      })

    }

    getUserDetails(){
      this.http.get(`http://localhost:3000/user`).subscribe((result:any)=>{
        this.userDetails=result;
        console.log(result);

      })
    }
}
