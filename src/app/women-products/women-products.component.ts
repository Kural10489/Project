import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { cartService } from '../services/http.cart';
import { HttpService } from '../services/http.service';
import { Price } from './price';
@Component({
  selector: 'app-women-products',
  templateUrl: './women-products.component.html',
  styleUrls: ['./women-products.component.css']
})
export class WomenProductsComponent{

  public addedToCart:boolean=false;
  public productId!:number;
  public count=this.cart.totalItems;
  public product=[];
  public productidCheck=[];
  // search
  public searchKey:string='';
  // new
  public filter1:string=''
  public filter2:string=''
  public filter3:string=''
  priceModel=new Price(false,false,false,false,false)
  price=500;
  // priceUnder500=false;
  // @ViewChild('priceUnder500')
  // priceUnder500Ref!: ElementRef;

  constructor(private http:HttpClient,public httpMethods:HttpService,private cart:cartService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
    this.cart.getTotalPrice();

    this.cart.search.subscribe(val=>{
      this.searchKey=val;
    })

  }
  // ngAfterViewInit(): void {
  //   if(this.priceUnder500Ref.nativeElement.oninput){
  //     this.priceUnder500=true;
  //     console.log(this.priceUnder500);
  //   };
  //   console.log(this.priceUnder500);

  //   console.log(this.priceUnder500Ref);
  // }

  addToCart(product:any){
    //  this.countIncrement();
    this.productId=product.id;
    this.addedToCart=true;
    this.cart.addtoCart(product);
  }
  removeCartItem(item:any){
    // this.countDecrement();
    this.cart.removeCartItem(item);
  }


//   countCartAddedProducts(product:any): number{

//     if(product.id===product){
//       this.countIncrement();
//     }
//     else{
//       this.countDecrement();
//     }
//     return this.itemCount;
// }

  // countIncrement(){

  //   this.itemCount++;
  // }
  // countDecrement(){
  //   this.itemCount--;
  // }

//  onSearchText(searchValue:any){
//   this.searchText=searchValue;
//   console.log(this.searchText);
//  }






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
