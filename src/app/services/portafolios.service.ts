import { Injectable } from '@angular/core';
import { Portafolio } from '../interface/portafolio';
@Injectable({
  providedIn: 'root'
})
export class PortafoliosService {
  portafolios:Portafolio[]=[
    {
      habilidad: 'HTML',
      nivel: '50%',
      descripcion: 'Conocimiento sólido en la estructura y semántica de páginas web, con experiencia en la creación de contenido estructurado y accesible.'
  },
  {
      habilidad: 'JavaScript',
      nivel: '50%',
      descripcion: 'Capacidad para desarrollar interactividad en aplicaciones web, utilizando conceptos básicos y avanzados de programación.'
  },
  {
      habilidad: 'CSS',
      nivel: '50%',
      descripcion: 'Habilidad en la estilización de páginas web, incluyendo diseño responsivo y uso de frameworks CSS.'
  },
  {
      habilidad: 'React',
      nivel: '25%',
      descripcion: 'Familiaridad con la biblioteca de JavaScript para construir interfaces de usuario dinámicas, aunque aún en fase de aprendizaje.'
  },
  {
      habilidad: 'SQL Server',
      nivel: '25%',
      descripcion: 'Conocimiento básico en la gestión de bases de datos relacionales y en la creación de consultas SQL.'
  },
  {
      habilidad: 'C++',
      nivel: '25%',
      descripcion: 'Comprensión de los principios de programación orientada a objetos y desarrollo de algoritmos básicos.'
  }
  ];

  constructor() { }
  getPortafolios():Portafolio[]{
    return this.portafolios;
  }
}
