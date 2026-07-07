import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators ,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    subject:new FormControl('',Validators.required),
    message:new FormControl('',Validators.required),
  });
  submitted=false;
  onSubmit(){
    this.submitted=true;
  }
}
