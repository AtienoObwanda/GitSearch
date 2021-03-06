import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GitService } from 'src/app/git.service';
import { Repository } from 'src/app/class/repo';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router, private gitservice : GitService) { }

  ngOnInit(): void {
  }

  username:string;
  user: User;
  repos:Repository[];

getProfile(){
    this.router.navigate(['/users',this.username])
    this.gitservice.getUser(this.username)
    this.user = this.gitservice.user
    this.gitservice.getRepo(this.username)
    this.repos =this.gitservice.repos
  
}

}
