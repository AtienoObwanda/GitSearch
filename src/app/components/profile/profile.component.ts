import { Component,Input, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { GitService } from 'src/app/git.service';
import { HttpClient } from '@angular/common/http';
import { Repository } from 'src/app/class/repo';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  repos:Repository[];

  constructor(private gitservice : GitService, private http:HttpClient) { }

  ngOnInit() {
    this.gitservice.getUser("AtienoObwanda")
    this.user = this.gitservice.user
    this.gitservice.getRepo("AtienoObwanda")
    this.repos = this.gitservice.repos

  }




}
