import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { map } from 'rxjs';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  constructor(private fb:FormBuilder,private http:HttpClient,public httpMethods:HttpService){}
  
  ngOnInit():void{
    this.httpMethods.getProductDetais();
  }

  registrationForm=this.fb.group({
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      MobileNumber:new FormControl(null,Validators.required),
      Email:new FormControl(null,Validators.required),
      Password:new FormControl(null,Validators.required)
  });

  createPost(){
    const postData=this.registrationForm.value;
    this.http.post('http://localhost:3000/user',postData).subscribe(response=>{console.log(response);
    });

  }

}
