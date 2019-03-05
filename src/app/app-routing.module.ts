import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleMatieresComponent } from 'src/app/module-matieres/module-matieres.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/contacts', pathMatch: 'full' },
 // { path: 'matieres', component: ModuleMatieresComponent },
 // { path: 'contacts/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }