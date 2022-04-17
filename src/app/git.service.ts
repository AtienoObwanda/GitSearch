import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GitService {
URL:string ='google.com'
myUsername:string='AtienoObwanda'

  constructor(private http : HttpClient) { }

//Get my profile
get myProfile(){
  return
}

//Get users
get user(){
  return
}

//Get Repos
get repo(){
  return
}





}
