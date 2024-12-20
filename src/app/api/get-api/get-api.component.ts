import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertBoxComponent } from '../../reusblecomponent/alert-box/alert-box.component';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertBoxComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GETAPIComponent {

  userList :any []=[];
  constructor(private http: HttpClient)
  {"getAllUser()"}

  getAllUser()
  { debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userList=res;
    })
  }

}
