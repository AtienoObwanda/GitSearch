import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Repo } from './class/repo';
import { User } from './class/user';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  user: User;
  
  username:string;
  


//GetUsers
  getUser(username){
  let profilePromise = new Promise<void>((resolve,reject)=>{
    this.http.get<User>(`https://api.github.com/users/${username}?client_id=${environment.gitToken}`)
    .subscribe((res:any)=>{
      
      this.user.name = res.name 
      this.user.login= res.login           
      this.user.bio  = res.bio   
      this.user.location=res.location         
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

  return profilePromise;

   }

//GetRepo
getRepo(username){
  //let repoPromise = new Promise<void> ((resolve,reject)=>{
    
  
    return //repoPromise;
   }

   constructor(private http: HttpClient, private route: ActivatedRoute ) {
    this.user = new User ("","","","",0,0,0,new Date(),"")

  }
  }
