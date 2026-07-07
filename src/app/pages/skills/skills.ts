import { Component, OnInit } from '@angular/core';
import{ Data,Skill } from '../../core/services/data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit {

  skills:Skill[]=[];
  constructor(private dataService:Data){}

  ngOnInit(){
    this.skills=this.dataService.getSkills();
  }
}
