import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleMatieresComponent } from './module-matieres/module-matieres.component';
import { ModulePlanningsComponent } from './module-plannings/module-plannings.component';
import { ModuleMaterielComponent } from './module-materiel/module-materiel.component';
import { ModuleSallesComponent } from './module-salles/module-salles.component';
import { ModuleRestitutionComponent } from './module-restitution/module-restitution.component';
import { AddOrdinateurComponent } from './module-materiel/ordinateur/add-ordinateur/add-ordinateur.component';
import { ListOrdinateurComponent } from './module-materiel/ordinateur/list-ordinateur/list-ordinateur.component';
import { DetailOrdinateurComponent } from './module-materiel/ordinateur/detail-ordinateur/detail-ordinateur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddSalleComponent } from './module-materiel/salle/add-salle/add-salle.component';
import { DetailSalleComponent } from './module-materiel/salle/detail-salle/detail-salle.component';
import { ListSalleComponent } from './module-materiel/salle/list-salle/list-salle.component';
import { AddProjecteurComponent } from './module-materiel/projecteur/add-projecteur/add-projecteur.component';
import { DetailProjecteurComponent } from './module-materiel/projecteur/detail-projecteur/detail-projecteur.component';
import { ListProjecteurComponent } from './module-materiel/projecteur/list-projecteur/list-projecteur.component';
import { AddFormateurComponent } from './module-humain/formateur/add-formateur/add-formateur.component';
import { DetailFormateurComponent } from './module-humain/formateur/detail-formateur/detail-formateur.component';
import { ListFormateurComponent } from './module-humain/formateur/list-formateur/list-formateur.component';
import { ModuleHumainComponent } from './module-humain/module-humain.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuleMatieresComponent,
    ModulePlanningsComponent,
    ModuleMaterielComponent,
    ModuleSallesComponent,
    ModuleRestitutionComponent,
    AddOrdinateurComponent,
    ListOrdinateurComponent,
    DetailOrdinateurComponent,
    AccueilComponent,
    AddSalleComponent,
    DetailSalleComponent,
    ListSalleComponent,
    AddProjecteurComponent,
    DetailProjecteurComponent,
    ListProjecteurComponent,
    AddFormateurComponent,
    DetailFormateurComponent,
    ListFormateurComponent,
    ModuleHumainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
