import { JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  name:string="GuJJar 1234566";
  reg:string="DANgerous khladi 5";
}
