import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { MinsaCarneVacunacionComponent } from './minsa-carne-vacunacion/minsa-carne-vacunacion.component';
import { FormsModule,ReactiveFormsModule   } from '@angular/forms';
import { CommonModule } from "@angular/common";

const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
   { path: 'minsa-carne-vacunacion', component: MinsaCarneVacunacionComponent }

];

@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [CommonModule,FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
