import { Component, OnInit } from '@angular/core';
import {MaterielService} from './module-materiel.service'
import {Salle,  Ordinateur, Projecteur} from './materiel';

@Component({
  selector: 'app-module-materiel',
  templateUrl: './module-materiel.component.html',
  styleUrls: ['./module-materiel.component.css']
})
export class ModuleMaterielComponent implements OnInit {

salles;
ordinateurs;
projecteurs;
selectedSalle: Salle;
selectedOrdinateur: Ordinateur;
selectedProjecteur: Projecteur;

  constructor(private materielService: MaterielService) { }

  ngOnInit() {
  
this.getSalles();
this.getOrdinateurs();
this.getProjecteurs();
  }
  onSelectSalle(salle: Salle): void{
    this.selectedSalle=salle;
    
  }
onSelectOrdi(ordinateur: Ordinateur): void{
    this.selectedOrdinateur=ordinateur;
    
  }
  onSelectPro(projecteur: Projecteur): void{
    this.selectedProjecteur=projecteur;
    
  } 
  getSalles(): void{
    this.materielService.getSalle()
        .subscribe(salle => this.salles = salle);
  }
   getOrdinateurs(): void{
    this.materielService.getOrdinateur()
        .subscribe(ordinateur => this.ordinateurs = ordinateur);
  }
  getProjecteurs(): void{
    this.materielService.getProjecteur()
        .subscribe(projecteur => this.projecteurs = projecteur);
  } 
}
