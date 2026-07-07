import { Component, OnInit } from '@angular/core';
import {Data , Project} from '../../core/services/data'

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit{
  projects:Project[]=[];

  constructor(private dataProjects:Data){}

  ngOnInit(){
    this.projects=this.dataProjects.getProjects();
  }
}
