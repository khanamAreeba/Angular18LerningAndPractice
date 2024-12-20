import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
student : any = {
  firstname:'',
  lastname:'',
  phoneNo:'',
  username:'',
  city:'',
  state:'',
  zipcode:'',
  acceptTerm:'',
}

fromvalue:any;

allowOnlyNumbers(event: KeyboardEvent) {
  const charCode = event.charCode || event.keyCode;
  // Allow only numbers (48-57 is the ASCII range for digits)
  if (charCode < 48 || charCode > 57) {
    event.preventDefault();
  }
}
submitNow()
{
  debugger;
  this.fromvalue=this.student;
}
}
