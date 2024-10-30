import { Injectable } from '@angular/core';
import { Viaje } from '../interface/viaje';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  viajes: Viaje[] = [
    {
        lugar: 'Pacucha',
        descripcion: 'Siempre paso por aquí, pero lo tomamos como un viaje. Este lugar es conocido por su hermoso lago y su entorno natural. Es un lugar perfecto para relajarse y disfrutar de la naturaleza.',
        imagen: './viajes/Pacucha.jpg' // Imagen de Pacucha
    },
    {
        lugar: 'Chalhuanca',
        descripcion: 'Un lugar muy bonito que me dejó maravillado. Sus paisajes montañosos y su rica cultura hacen de este destino un lugar especial para visitar. Disfruté de la gastronomía local y la calidez de su gente.',
        imagen: './viajes/Chalhuanca.jpg' // Imagen de Chalhuanca
    },
    {
        lugar: 'Cusco',
        descripcion: 'No tengo fotos, pero sí grandes recuerdos, especialmente por Calca. Esta ciudad es un tesoro cultural con una historia rica y maravillosa, además de ser la puerta de entrada a Machu Picchu. La arquitectura y las tradiciones locales son simplemente increíbles.',
        imagen: '' // Sin imagen, cadena vacía
    },
    {
        lugar: 'Lima',
        descripcion: 'Aunque no tengo fotos, es una ciudad muy linda. La mezcla de modernidad y tradición, junto con su deliciosa comida, la convierten en un lugar que definitivamente vale la pena explorar. Desde el centro histórico hasta sus playas, hay mucho que ver y hacer.',
        imagen: '' // Sin imagen, cadena vacía
    }
];

  constructor() { }
  getViajes():Viaje[] {
    return this.viajes;
  }
}
