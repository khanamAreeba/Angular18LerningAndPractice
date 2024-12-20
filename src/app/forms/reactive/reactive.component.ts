import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm: FormGroup=new FormGroup({
    firstName :new FormControl("",[Validators.required,Validators.minLength(3)]),
    lastName :new FormControl(""),
    userName :new FormControl("some@123", [Validators.email]),
    city :new FormControl(""),
    state :new FormControl(""),
    zipCode :new FormControl(""),
    isAccept:new FormControl(""),
  })

  formElement:any;

  saveOn()
  {
    this.formElement=this.studentForm.value;
  }
  
}
