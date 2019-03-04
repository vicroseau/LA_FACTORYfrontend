import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleMatieresComponent } from './module-matieres/module-matieres.component';
import { ModuleFormateursComponent } from './module-formateurs/module-formateurs.component';
import { ModulePlanningsComponent } from './module-plannings/module-plannings.component';
import { ModuleMaterielComponent } from './module-materiel/module-materiel.component';
import { ModuleSallesComponent } from './module-salles/module-salles.component';
import { ModuleRestitutionComponent } from './module-restitution/module-restitution.component';
import { AjoutcompComponent } from './module-formateurs/ajoutcomp/ajoutcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuleMatieresComponent,
    ModuleFormateursComponent,
    ModulePlanningsComponent,
    ModuleMaterielComponent,
    ModuleSallesComponent,
    ModuleRestitutionComponent,
    AjoutcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
