import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Repo } from './class/repo';
import { User } from './class/user';

@Injectable({
  providedIn: 'root'
})
export class GitService {
user: User; //users
repo: Repo[]=[]; //repository
uName : string; //username
rName : string; //repository name
repos =[] //repositories

  constructor(private http : HttpClient) { }

//Get my profile
getmyProfile(){
  
}

//Get users
getUser(username){
  let promise = new Promise((resolve,reject)=>{
    this.http.get<User[]>(`https://api.github.com/users/${username}?client_id=${environment.gitToken}`)
      .subscribe(
        {
          next:(res: any)=>{
            this.user=res.map((res:any)=>{
              return new User(
              res.avatar_url,
              res.fname,
              res.uname,
              res.bio,
              res.followers,
              res.following,
              res.public_repos,
              res.created_at
              );
            });
            resolve(res);
          },
          error: (err: any)=>{
            this.user.uname="Username not found"
            console.log("Error response")
            reject(err);
            
          }
        }
      )
  });
  return promise;
}

//Get Repos
getRepo(){
  return
}





}
