import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Repo } from './class/repo';
import { User } from './class/user';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  user: User;
  repos: Repo[]=[];
  username:string;
  reponame:string;
  repositories=[]



  getUser(username){

    
 
 
 

  let promise = new Promise<void>((resolve,reject)=>{
    this.http.get<User[]>(`https://api.github.com/users/${username}?client_id=${environment.gitToken}`)
    .subscribe((res:any)=>{
      
      this.user.name = res.name 
      this.user.login= res.login           
      this.user.bio  = res.bio            
      this.user.followers=res.followers
      this.user.following =  res.following
      this.user.public_repos =  res.public_repos
      this.user.created_at =  res.created_at
      this.user.avatar_url =  res.avatar_url
        
        resolve()
    },
    
    error =>{
      this.user.login="Username not found"
      console.log("Error response")
      reject(error);
      
    }
    )
    
          
  })

  return promise;

   }

   constructor(private http: HttpClient, private route: ActivatedRoute ) {
    this.user = new User ("","","",0,0,0,new Date(),"")
   }
  }
