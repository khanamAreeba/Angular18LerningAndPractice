import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

datainput : string = "areeba khan";
city: string= "City";
Number: number= 923224385028;
field: string="field";
rollNumber : string = "l1f21bscs485";
dateofBirth : Date = new Date(',');
input_type = "radio";
myClassName : string ="bg-danger";



showAlert(message: string){
  alert(message)
}

changedatainput()
{
  this.datainput="Pyari Areeba khan"
}
}