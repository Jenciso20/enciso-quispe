import { Injectable } from '@angular/core';
import { Hobbie } from '../interface/hobbie';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {
  hobbies: Hobbie[] = [
    {
        title: 'Jugar fútbol',
        descripcion: 'El fútbol es una de mis mayores pasiones. A pesar de tener una lesión, sigo jugando y siempre encuentro un espacio para practicar y mejorar mis habilidades en el campo.',
        imagen: './hobbies/equipo.jpg'
    },
    {
        title: 'Hacer ejercicio',
        descripcion: 'Mantenerme en forma es esencial para mí. Ya sea entrenando en casa o yendo al gimnasio, el ejercicio es parte de mi rutina diaria.',
        imagen: ''
    },
    {
        title: 'Pasear en la naturaleza',
        descripcion: 'Disfruto de estar al aire libre, caminar por la naturaleza y apreciar la tranquilidad que ofrece. Me gusta explorar y encontrar nuevos paisajes naturales.',
        imagen: './hobbies/paisaje.jpg'
    },
    {
        title: 'Practicar programación',
        descripcion: 'Me encanta aprender nuevas tecnologías y mejorar mis habilidades en programación. Dedico tiempo a resolver retos y trabajar en proyectos personales para avanzar como programador.',
        imagen: './hobbies/programando.jpg'
    }
];
  constructor() { }
  getHobbies():Hobbie[]{
    return this.hobbies;
  }
}
