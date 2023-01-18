import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartService } from './http.cart';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticate!:boolean;
  server='http://localhost:3000/user';
  constructor(private cart:cartService,private http:HttpClient) { }

isLogin=()=>{
  if(this.getUserName()){
    return true;
  }
  else{
    return false;
  }
}

existingUserDetails(){
  return this.http.get<any>(`http://localhost:3000/user`);
}
userServer(){
  return this.server;
}
getUserName=()=>{
  return localStorage.getItem('name');
}
logout(){
  localStorage.clear();
  this.cart.removeAllCartItems();
}

}
