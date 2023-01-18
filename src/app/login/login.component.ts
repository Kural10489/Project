import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  private text:any;
  public loginForm!:FormGroup;

  public username='';

  constructor(private http:HttpClient,private httpMethod:HttpService,private form:FormBuilder,private route:Router,private user:UserService){
    this.text=[];
    this.email=[];
    this.password=[];
  }

  ngOnInit(): void {
    this.loginForm=this.form.group({
      email:new FormControl ('',Validators.email),
      password:new FormControl('',Validators.minLength(4)),
      text:new FormControl ('',Validators.minLength(4))
    })

}

onLogin(){

   this.user.existingUserDetails().subscribe(result=>{
   const user=result.find((a:any)=>{
    return a.Email===this.loginForm.value.email && a.Password===this.loginForm.value.password

   })
   if(user){
    alert('Login Sucess');
    localStorage.setItem('name',this.loginForm.value.text);
    localStorage.setItem('password',this.loginForm.value.password);
    this.route.navigate(['']);
   }
   else{
    alert('User not found')
   }
  });

}

}

