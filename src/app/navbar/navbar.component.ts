import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cartService } from '../services/http.cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  public searchTerm='';
  constructor(public cart:cartService,public route:Router){


  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);

  }
navigateToCart(){
  this.route.navigate(['cart']);
}

}


