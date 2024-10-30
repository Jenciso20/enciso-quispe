import { Injectable } from '@angular/core';
import { Receta } from '../interface/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  recetas:Receta[]=[
    {
      ingredientes:
      [
      '1 gallina pequeña',
      '2 litros de agua',
      '1 cebolla, partida por la mitad',
      '2 dientes de ajo, picados',
      '1 zanahoria, en rodajas',
      '2 ramas de apio, picadas',
      'Sal y pimienta al gusto',
      'Arroz (opcional)',
      'Hojas de cilantro (para decorar)'
    ],
    preparacion:
    [
      'En una olla grande, colocar la gallina y cubrir con el agua. Llevar a ebullición.',
              'Agregar la cebolla, el ajo, la zanahoria y el apio. Cocinar a fuego medio durante aproximadamente 1.5 horas, o hasta que la gallina esté tierna.',
              'Retirar la gallina y desmenuzarla. Colar el caldo para eliminar los sólidos.',
              'Regresar el caldo colado a la olla y, si se desea, añadir arroz. Cocinar hasta que el arroz esté listo.',
              'Servir el caldo caliente, añadiendo el pollo desmenuzado y decorando con hojas de cilantro.'
    ]
  }
  ]
  constructor() { }
  getRecetas():Receta[]{
    return this.recetas;
  }
}
