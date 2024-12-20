import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructralDirectiveComponent } from './structral-directive/structral-directive.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PipeComponent } from './pipe/pipe.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { GETAPIComponent } from './api/get-api/get-api.component';
import { PostApiComponent } from './api/post-api/post-api.component';

export const routes: Routes = [
    {
        path:'Emp-list',
        component:EmployeelistComponent
    },
    {
        path:'Data-binding',
        component:DatabindingComponent
    },
    {
        path:'Structural-Dir',
        component:StructralDirectiveComponent
    },
    {
        path:'Attribute-Dir',
        component:AttributeDirectiveComponent
    },
    {
        path:'Pipes',
        component:PipeComponent
    },
    {
        path:'Forms/template',
        component:TemplateComponent
    },
    {
        path:"reactive",
        component:ReactiveComponent
    },
    {
        path:"GET",
        component:GETAPIComponent,
        title:'tu vi bakwas bnd kr'
    },
    {
        path:"POST",
        component:PostApiComponent,
        title:'bakwas bnd kr'
    }
];
