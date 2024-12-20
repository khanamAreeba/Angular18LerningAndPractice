import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeelist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
employee :any =[
  {Name: 'abc',id:123,age:23,salary:20000,isActive:true},
  {Name: 'efg',id:456,age:50,salary:30000,isActive:false},
  {Name: 'ijk',id:789,age:34,salary:25000,isActive:false},
  {Name: 'mno',id:101,age:49,salary:35000,isActive:true},

]
}
