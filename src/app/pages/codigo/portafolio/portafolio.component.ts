import { Component } from '@angular/core';
import { Portafolio } from '../../../interface/portafolio';
import { PortafoliosService } from '../../../services/portafolios.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {
titulo='Habilidades Técnicas'
  portafolios:Portafolio[]=[];
  constructor(public portafoliosService:PortafoliosService){

  }
  ngOnInit(){
    this.portafolios=this.portafoliosService.getPortafolios()
  }
}
