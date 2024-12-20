import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1color :string ='bg-primary';
  isActive:boolean=false;
  Num1 : string='';
  Num2: string='';
  isChecked : boolean=true;
  studentData:any[]=[
    {studId:12 ,totalmark:68,studName:"Areeb",section:"a1",isActive:false},
    {studId:34 ,totalmark:88,studName:"Burhan",section:"b2",isActive:true},
    {studId:56 ,totalmark:58,studName:"Bunny",section:"c4",isActive:false},
    {studId:78 ,totalmark:20,studName:"Areeba khan",section:"d5",isActive:true}

  ]

  redcolor()
  {
    this.div1color='bg-danger';
  }
  bluecolor()
  {
    this.div1color='bg-primary';
  }
  togglediv2()
  {
    this.isActive=!this.isActive;
  }
}
