import { Component, OnInit } from '@angular/core';
import {MaterielService} from './module-materiel.service'
import {Salle, Ordinateur, Projo} from './materiel';

@Component({
  selector: 'app-module-materiel',
  templateUrl: './module-materiel.component.html',
  styleUrls: ['./module-materiel.component.css']
})
export class ModuleMaterielComponent implements OnInit {

salles;
ordinateurs;
projos;
selectedSalle: Salle;
selectedOrdinateur: Ordinateur;
selectedProjo: Projo;

  constructor(private materielService: MaterielService) { }

  ngOnInit() {
  
this.getSalles();
this.getOrdinateurs();
this.getProjos();
  }
  onSelectSalle(salle: Salle): void{
    this.selectedSalle=salle;
    
  }
  onSelectOrdi(ordinateur: Ordinateur): void{
    this.selectedOrdinateur=ordinateur;
    
  }
  onSelectPro(projo: Projo): void{
    this.selectedProjo=projo;
    
  }
  getSalles(): void{
    this.materielService.getSalle()
        .subscribe(salle => this.salles = salle);
  }
  getOrdinateurs(): void{
    this.materielService.getOrdinateur()
        .subscribe(ordinateur => this.ordinateurs = ordinateur);
  }
  getProjos(): void{
    this.materielService.getProjo()
        .subscribe(projo => this.projos = projo);
  }
}
