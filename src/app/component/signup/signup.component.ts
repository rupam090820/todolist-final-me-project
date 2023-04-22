import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/LoginService/login-service.service';
import { signup } from '../user/signup';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PassValidationv } from 'src/app/CustomValidation/CustomValidation';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // for signup
  public newuser: any = [];




  constructor(private Loginapi: LoginServiceService,private route:Router,private fb:FormBuilder) {
    //this.newuser = new signup('rupam','rupams441@gmail.com','aA1@aaaa','aA1@aaaa');
    this.newuser = new signup('', '', '');
  }

  
// create  reactive form
myform: any = [];

ngOnInit(): void {
  }



public get cpass() {
  return this.myform.get('cpass') as FormControl;
}


 // signup  if we use json server

// SignUp(){
//   // console.log(this.newuser);
 
//   this.Loginapi.signup(this.myform.value).subscribe((res:any)=>{
//     console.log(res);
   
//     alert('SignUp Successfully');
//     this.route.navigateByUrl('/login');
    
//     },(err:any)=> {
//     alert('sorry!!!,please try again');
//   });
//   }

SignUp(formdata:any){
  console.log(this.newuser);
  let userdata=this.newuser;
  this.Loginapi.signUp(userdata).subscribe((res:any)=>{
    console.log(res);
    // alert(res.message)
    alert(res.message);
    this.route.navigateByUrl('/login');
  
  });
  }

}
