import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HobbiesService } from '../../services/hobbies.service';
import { Hobbie } from '../../interface/hobbie';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.css'
})
export class HobbiesComponent {
  
    hobbies:Hobbie[]=[];
    constructor(public hobbiesService:HobbiesService){
  
    }
    ngOnInit(){
      this.hobbies=this.hobbiesService.getHobbies();
}
}