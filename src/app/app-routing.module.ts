import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: ()=>import('./pages/main/main.component').then((m)=>m.MainPageComponent),
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: ()=>import('./pages/about/about.component').then((m)=>m.AboutPageComponent),
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
