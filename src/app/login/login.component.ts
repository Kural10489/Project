import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { authenticateService } from '../services/http.Authenticate';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email:any;
  private password:any;
  public loginForm!:FormGroup;

  public username='';

  constructor(private http:HttpClient,private httpMethod:HttpService,private form:FormBuilder,private route:Router,private auth:authenticateService,private user:UserService){
    this.email=[];
    this.password=[];
  }

  ngOnInit(): void {
    this.loginForm=this.form.group({
      email:[''],
      password:['']
    })

}

onLogin(){
  // console.log(this.loginForm.value.password.find((a:any)=>a==='moni'));

  // this.email=this.http.get(`http://localhost:3000/user`).subscribe(result=>{
  //  const user=result.find((a:any)=>{
  //   return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
  //  })
   this.http.get<any>(`http://localhost:3000/user`).subscribe(result=>{
   const user=result.find((a:any)=>{
    return a.Email===this.loginForm.value.email && a.Password===this.loginForm.value.password
   })
   if(user){
    alert('Login Sucess');
    this.user.login();
    console.log(user);
    this.route.navigate(['']);
   }
   else{
    alert('User not found')
   }
  });

}

}
