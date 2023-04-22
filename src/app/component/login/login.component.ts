import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/LoginService/login-service.service';
import { login } from '../user/login';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //for reactive form
  myform: any = [];

  // for login
  public loguser: any = [];



  constructor(private loginapi: LoginServiceService, private route: Router, private fb: FormBuilder, private http: HttpClient) {
    // this.loguser= new login('rupams441@gmail.com','aA1@aaaa')
    this.loguser = new login('', '');
  }

  ngOnInit(): void {
    this.myform = this.fb.group({

      'email': [, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      'pass1': [, [Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],

    })
  }
  public get email() {
    return this.myform.get('email') as FormControl;
  }

  public get pass1() {
    return this.myform.get('pass1') as FormControl;
  }

  // for login using json server
  // login(){

  // this.http.get<any>('http://localhost:4000/signup').subscribe((res:any)=>{
  //   const user = res.find((a:any)=>{
  //     return a.email === this.loguser.email && a.pas1 === this.loguser.pas1
  //   })
  //   if(user){
  //     alert('Login successfull')
  //     localStorage.setItem('email',this.loguser.email);
  //     localStorage.setItem('password',this.loguser.pas1);
  //     this.route.navigateByUrl('/todo')
  //   }
  //   else{
  //     alert('User Not Found!!! please go to Signup Page....')
  //   }
  // })
  // }


  // logn for api:----
  public loading:boolean=false;
  login() {
    //console.log(this.loguser);
    // let logIndata = this.loguser;
    this.loading=true;
    this.loginapi.login(this.loguser).subscribe((res: any) => {
      console.log(res);
      this.loading=false;
      alert(res.message);
      if (res.message == 'success') {
        localStorage.setItem('User', res.loggedUser);
        localStorage.setItem('token', res.token);
      }
      this.route.navigateByUrl('/todo')

    });
  }

}
