import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleMaterielComponent } from 'src/app/module-materiel/module-materiel.component';
import { AddOrdinateurComponent } from 'src/app/module-materiel/ordinateur/add-ordinateur/add-ordinateur.component';
import { ListOrdinateurComponent } from 'src/app/module-materiel/ordinateur/list-ordinateur/list-ordinateur.component';
import { DetailOrdinateurComponent } from 'src/app/module-materiel/ordinateur/detail-ordinateur/detail-ordinateur.component';
import { ModuleMatieresComponent } from 'src/app/module-matieres/module-matieres.component';
import { ModulePlanningsComponent } from 'src/app/module-plannings/module-plannings.component';
import { ModuleRestitutionComponent } from 'src/app/module-restitution/module-restitution.component';
import { ModuleSallesComponent } from 'src/app/module-salles/module-salles.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddProjecteurComponent } from 'src/app/module-materiel/projecteur/add-projecteur/add-projecteur.component';
import { ListProjecteurComponent } from 'src/app/module-materiel/projecteur/list-projecteur/list-projecteur.component';
import { DetailProjecteurComponent } from 'src/app/module-materiel/projecteur/detail-projecteur/detail-projecteur.component';
import { AddSalleComponent } from 'src/app/module-materiel/salle/add-salle/add-salle.component';
import { ListSalleComponent } from 'src/app/module-materiel/salle/list-salle/list-salle.component';
import { DetailSalleComponent } from 'src/app/module-materiel/salle/detail-salle/detail-salle.component';
import { ModuleHumainComponent } from 'src/app/module-humain/module-humain.component';
import { AddFormateurComponent } from 'src/app/module-humain/formateur/add-formateur/add-formateur.component';
import { ListFormateurComponent } from 'src/app/module-humain/formateur/list-formateur/list-formateur.component';
import { DetailFormateurComponent } from 'src/app/module-humain/formateur/detail-formateur/detail-formateur.component';


const routes: Routes = [
  { path: 'accueil',component:AccueilComponent},
  {path:'', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'matieres', component: ModuleMatieresComponent },
  { path: 'salles', component: ModuleSallesComponent },
  { path: 'plannings', component: ModulePlanningsComponent },
  { path: 'materiel', component: ModuleMaterielComponent },
  { path: 'ordinateur/add', component: AddOrdinateurComponent },
  { path: 'ordinateur/list', component: ListOrdinateurComponent },
  { path: 'ordinateur/detail/:code', component: DetailOrdinateurComponent },
  { path: 'projecteur/add', component: AddProjecteurComponent },
  { path: 'projecteur/list', component: ListProjecteurComponent },
  { path: 'projecteur/detail/:code', component: DetailProjecteurComponent },
  { path: 'salle/add', component: AddSalleComponent },
  { path: 'salle/list', component: ListSalleComponent },
  { path: 'salle/detail/:code', component: DetailSalleComponent },
  { path: 'humain', component: ModuleHumainComponent },
  { path: 'formateur/add', component: AddFormateurComponent },
  { path: 'formateur/list', component: ListFormateurComponent },
  { path: 'formateur/detail/:code', component: DetailFormateurComponent },
  { path: 'restitution', component: ModuleRestitutionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }