import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class authenticateService implements CanActivate {
  authenticate!:boolean;

  constructor(private route:Router){}
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
     ): boolean | Observable<boolean> | Promise<boolean> {
    if(this.authenticate){
      return true;
    }
    else{
      this.route.navigate(['login']);
    }
    return true;
  }




  login(){
    this.authenticate=true;
  }
  loggedOut(){
    this.authenticate=false;
  }

}
