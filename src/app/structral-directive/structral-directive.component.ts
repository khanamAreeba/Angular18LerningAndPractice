import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structral-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structral-directive.component.html',
  styleUrl: './structral-directive.component.css',
})
export class StructralDirectiveComponent {
  isDiv1Visible: boolean = true;
  div2: boolean = true;
  Num1: string = '';
  Num2: string ='';
  IsActive: boolean = true;
  state:string='';
  Name: string[]=['Areeba khan','Shahzaib khan','Tayyaba Akbar','Subhan khan']

  studentData:any[]=[
    {studId:12 ,studName:"Areeb",section:"a1",isActive:false},
    {studId:34 ,studName:"Burhan",section:"b2",isActive:true},
    {studId:56 ,studName:"Bunny",section:"c4",isActive:false},
    {studId:78 ,studName:"Areeba khan",section:"d5",isActive:true}

  ]

  showDiv1() {
    this.isDiv1Visible = true;
  }
  hideDiv1() {
    this.isDiv1Visible = false;
  }

  // toogle means vice versa
  toogle() {
    this.div2 = !this.div2;
  }

  HideAndShowThroghcomparison()
  {
    if (this.Num1 !=this.Num2)
    {
      this.isDiv1Visible=false;
    }
    else
    {
      this.isDiv1Visible=true;
    }
  }
}
