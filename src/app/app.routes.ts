import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) }, // Lazy loading
  { path: 'hobbies', loadComponent: () => import('./pages/hobbies/hobbies.component').then(m => m.HobbiesComponent) }, // Lazy loading
  { path: 'viajes', loadComponent: () => import('./pages/viajes/viajes.component').then(m => m.ViajesComponent) }, // Lazy loading
  { path: 'recetas', loadComponent: () => import('./pages/recetas/recetas.component').then(m => m.RecetasComponent) }, // Lazy loading
  { path: 'horario', loadComponent: () => import('./pages/codigo/horario/horario.component').then(m => m.HorarioComponent) }, // Lazy loading
  { path: 'portafolio', loadComponent: () => import('./pages/codigo/portafolio/portafolio.component').then(m => m.PortafolioComponent) }, // Lazy loading
  
];
