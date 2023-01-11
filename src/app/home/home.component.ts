import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http:HttpClient,public httpMethods:HttpService,public user:UserService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
  }
}


// public user:UserService
