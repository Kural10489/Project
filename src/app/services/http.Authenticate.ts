import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class authenticateService implements CanActivate {


  constructor(private route:Router ,private user:UserService){}
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
     ): boolean | Observable<boolean> | Promise<boolean> {
    if(this.user.isLogin()){
      return true;
    }
    else{
      this.route.navigate(['login']);
    }
    return true;
  }





}
