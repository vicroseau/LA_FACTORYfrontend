import { Component, OnInit } from '@angular/core';
import { MaterielService } from './module-materiel.service';
import { Salle, Ordinateur, Projecteur } from './materiel';
import { Location } from '@angular/common';

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

  constructor(private materielService: MaterielService,private location: Location) { }

  ngOnInit() {

  }
 
  goBack(): void {
    this.location.back();
  }
}
