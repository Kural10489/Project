import { Injectable } from '@angular/core';
import { cartService } from './http.cart';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticate!:boolean;

  constructor(private cart:cartService) { }

isLogin=()=>{
  if(this.getUserName()){
    return true;
  }
  else{
    return false;
  }
}


getUserName=()=>{
  return localStorage.getItem('name');
}
logout(){
  localStorage.clear();
  this.cart.removeAllCartItems();
}

}
