import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private http:HttpClient,public httpMethods:HttpService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
  }
}


