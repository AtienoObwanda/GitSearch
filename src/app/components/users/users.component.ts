import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitService } from 'src/app/git.service';

import { Repo } from 'src/app/class/repo';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  repos:Repo;
  user: User;
  username: string;

  constructor(private route:ActivatedRoute, private gitservice : GitService) { }

  result(){
    this.gitservice.getUser(this.username)
    this.user = this.gitservice.user
    this.gitservice.getRepo(this.username)
    this.repos =this.gitservice.repos

    //this.showRepositories=false;
}


  ngOnInit(): void {
    this.result
  }

}
