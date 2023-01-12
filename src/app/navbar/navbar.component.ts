import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { cartService } from '../services/http.cart';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  public searchTerm:string='';

  @Output()
  public searchText:EventEmitter<string>=new EventEmitter<string>();

  constructor(public cart:cartService,public route:Router,public user:UserService){}

Search(event:any){
this.searchTerm=(event.target as HTMLInputElement).value;
console.log(this.searchTerm);
this.cart.search.next(this.searchTerm);
}

navigateToCart(){
  this.route.navigate(['cart']);
}

}


