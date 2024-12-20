import { HttpClient } from '@angular/common/http';
import { Component, inject ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';
import { AlertBoxComponent } from "../../reusblecomponent/alert-box/alert-box.component";

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, AlertBoxComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  deptObj :any={
    "departmentId":0,
    "departmentName":"",
    "departmentLogo":""
  }
  deptList : any[]=[];
  http=inject(HttpClient);
  ngOnInit(): void {
    this.get();
  }
  
  saveOn()
  {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>{
      debugger;
      if(res.result)
      {
        alert("Department Created");
      } 
      else
      {
        alert(res.result)
      }
    })
  }
  get()
  {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>this.deptList=res.data)
  }
  onEdit(data:any)
  {
    this.deptObj=data;
  }
  Update()
  {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.deptObj).subscribe((res:any)=>{
      debugger;
      if(res.result)
      {
        alert("Department Name & Logo Updated");
      } 
      else
      {
        alert(res.result)
      }
    })
  }
  onDelete(id:number)
  {
    const del=confirm("Are you sure You want delete this")
    if(del)
    {
      this.http.delete("https://projectapi.gerasim.in/api/Complaint//DeletedepartmentBydepartmentId?departmentId="+id).subscribe((res:any)=>{
        debugger;
        if(res.result)
        {
          alert("Delete Department");
        } 
        else
        {
          alert(res.result)
        }
      })
    }
   
  }
}

