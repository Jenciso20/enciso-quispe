import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ViajesService } from '../../services/viajes.service';
import { Viaje } from '../../interface/viaje';


@Component({
  selector: 'app-viajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viajes.component.html',
  styleUrl: './viajes.component.css'
})
export class ViajesComponent {
  viajes:Viaje[]=[];
  constructor(public viajesService:ViajesService){

  }
  ngOnInit(){
    this.viajes=this.viajesService.getViajes();
  }
}
