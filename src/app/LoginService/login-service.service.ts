import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from '../component/user/login';
import { signup } from '../component/user/signup';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  // user signup for json server
  // signup(userdata:any){
  //   return this.http.post('http://localhost:4000/signup', userdata);
  // }

  // login for json server
  // login(logindata:any){
  //   return this.http.post('http://localhost:4000/login',logindata);
  // }

    //User signUp for api: 
    signUp(userdata:any){

      return this.http.post('https://rest-food-api.glitch.me/api/user/signup',userdata);
     }
  
    // user Login for api :
     login(logIndata:any){
      return this.http.post('https://rest-food-api.glitch.me/api/user/login',logIndata);
     }
}
