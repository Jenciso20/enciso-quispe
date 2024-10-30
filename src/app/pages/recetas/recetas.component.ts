import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Receta } from '../../interface/receta';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {
  recetas:Receta[]=[];
  constructor(public recetasService:RecetasService){

  }
  ngOnInit(){
    this.recetas=this.recetasService.getRecetas();
  }
}
