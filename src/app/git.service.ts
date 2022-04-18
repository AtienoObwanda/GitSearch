import { map } from 'rxjs/operators';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



import { Repository } from './class/repo';
import { User } from './class/user';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  user: User;
  repos: Repository[]=[];
  username:string;
  


//GetUsers
  getUser(username){
  let profilePromise = new Promise<void>((resolve,reject)=>{
    this.http.get<User>(`https://api.github.com/users/${username}?client_id=${environment.clientSecret}`)
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
      this.user.html_url = res.html_url
        
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
    
     let promise = new Promise<void> ((resolve,reject)=>{
      let arrayLength = this.repos.length;

      for (let i=0; i<arrayLength; i++){
          this.repos.pop()
      }
      this.http.get<Repository>(`https://api.github.com/users/${username}/repos?client_id=${environment.clientSecret}`)
      .toPromise().then(response=>{
        for (let i=0; i<this.user.public_repos; i++){
            let repo = new Repository("","","")
            repo.name = response[i]["name"]
            repo.description =response[i]["description"]
            repo.html_url = response [i]["html_url"]
            this.repos.push(repo)
        }
        resolve()
    },

    error => {
        console.log("an error occurred")
        reject(error)
    }
    )
   })

  return promise;

  }
  


   constructor(private http: HttpClient, private route: ActivatedRoute ) {
    this.user = new User ("","","","",0,0,0,new Date(),"","")

  }
  }
