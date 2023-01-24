import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { cartService } from '../services/http.cart';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  constructor(private fb:FormBuilder,private http:HttpClient,public httpMethods:HttpService,
    private route:Router,private user:UserService,private cart:cartService){}

  ngOnInit():void{
    this.httpMethods.getProductDetais();
  }

  registrationForm=this.fb.group({
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      mobileNumber:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(4)])
  });

public createPost(){
    const postData=this.registrationForm.value;
    this.http.post(this.cart.baseUrl+'/user',postData).subscribe(response=>{console.log(response);
    });

  }

public onSignup(){

      this.route.navigate(['']);
  }

}
