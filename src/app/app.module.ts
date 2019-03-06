import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleMatieresComponent } from './module-matieres/module-matieres.component';
import { ModuleFormateursComponent } from './module-formateurs/module-formateurs.component';
import { ModulePlanningsComponent } from './module-plannings/module-plannings.component';
import { ModuleMaterielComponent } from './module-materiel/module-materiel.component';
import { ModuleSallesComponent } from './module-salles/module-salles.component';
import { ModuleRestitutionComponent } from './module-restitution/module-restitution.component';
import { AjoutcompComponent } from './module-formateurs/ajoutcomp/ajoutcomp.component';
import { AddOrdinateurComponent } from './module-materiel/ordinateur/add-ordinateur/add-ordinateur.component';
import { ListOrdinateurComponent } from './module-materiel/ordinateur/list-ordinateur/list-ordinateur.component';
import { DetailOrdinateurComponent } from './module-materiel/ordinateur/detail-ordinateur/detail-ordinateur.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuleMatieresComponent,
    ModuleFormateursComponent,
    ModulePlanningsComponent,
    ModuleMaterielComponent,
    ModuleSallesComponent,
    ModuleRestitutionComponent,
    AjoutcompComponent,
    AddOrdinateurComponent,
    ListOrdinateurComponent,
    DetailOrdinateurComponent,
    AccueilComponent
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
