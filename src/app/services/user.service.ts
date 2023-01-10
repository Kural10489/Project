import { Injectable } from '@angular/core';
import { authenticateService } from './http.Authenticate';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authenticate!:boolean;
  
  constructor(private Auth:authenticateService) { }


  login(){
    this.authenticate=true;
  }
  loggedOut(){
    this.authenticate=false;
  }
}
