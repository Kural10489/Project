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

public isLogin=()=>{
  if(this.getUserName()){
    return true;
  }
  else{
    return false;
  }
}

public existingUserDetails(){
  return this.http.get<any>(`http://localhost:3000/user`);
}
public userServer(){
  return this.server;
}
public getUserName=()=>{
  return localStorage.getItem('name');
}
public logout(){
  localStorage.clear();
  this.cart.removeAllCartItems();
  this.http.delete('http://localhost:3000/Orders').subscribe();
}

}
