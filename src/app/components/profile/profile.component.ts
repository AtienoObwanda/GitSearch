import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { GitService } from 'src/app/git.service';
import { HttpClient } from '@angular/common/http';
import { Repo } from 'src/app/class/repo';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  repo : Repo[];


  constructor(private gitservice : GitService) { }

  ngOnInit() {
    this.gitservice.getUser("AtienoObwanda")
    this.user=this.gitservice.user
  }

}
