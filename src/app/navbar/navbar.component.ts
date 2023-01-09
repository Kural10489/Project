import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cartService } from '../services/http.cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
constructor(public cart:cartService,public route:Router){}


navigateToCart(){
  this.route.navigate(['cart']);
}

}


