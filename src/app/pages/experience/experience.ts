import { Component, OnInit } from '@angular/core';
import {Data , ExperienceItem} from '../../core/services/data'

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements OnInit{
  experiences:ExperienceItem[]=[];

  constructor(private dataExperienceItem: Data){}

  ngOnInit(){
    this.experiences=this.dataExperienceItem.getExperience();

  }
}
