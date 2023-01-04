import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project';
constructor(private http:HttpClient,public httpMethods:HttpService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
  }
}
