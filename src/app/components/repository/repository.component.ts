import { Component, Input, OnInit } from '@angular/core';
import { Repo } from '../../class/repo';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
@Input () repos:Repo[];

  constructor() { }

  ngOnInit(): void {
  }

}
