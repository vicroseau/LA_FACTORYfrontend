import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleMatieresComponent } from 'src/app/module-matieres/module-matieres.component';
import { ModuleFormateursComponent } from 'src/app/module-formateurs/module-formateurs.component'
import { ModuleSallesComponent } from 'src/app/module-salles/module-salles.component'
import { ModulePlanningsComponent } from 'src/app/module-plannings/module-plannings.component'
import { ModuleMaterielComponent } from 'src/app/module-materiel/module-materiel.component'
import { ModuleRestitutionComponent } from 'src/app/module-restitution/module-restitution.component'




const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'matieres', component: ModuleMatieresComponent },
  { path: 'formateurs', component: ModuleFormateursComponent },
  { path: 'salles', component: ModuleSallesComponent },
  { path: 'plannings', component: ModulePlanningsComponent },
  { path: 'materiel', component: ModuleMaterielComponent },
  { path: 'restitution', component: ModuleRestitutionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }