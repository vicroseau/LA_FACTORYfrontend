import { Component, OnInit } from '@angular/core';
import { MaterielService } from '../../module-materiel.service';
import { Projecteur } from '../../materiel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-projecteur',
  templateUrl: './add-projecteur.component.html',
  styleUrls: ['./add-projecteur.component.css']
})
export class AddProjecteurComponent implements OnInit {

  projecteur = new Projecteur();
  selectedProjecteur: Projecteur;
  submitted = false;

  ngOnInit() {
  }

  constructor(
    private materielService: MaterielService,
    private location: Location
  ) { }

  newProjecteur(): void {
    this.submitted = false;
    this.projecteur = new Projecteur();
  }

  addProjecteur() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.materielService.addProjecteur(this.projecteur).subscribe();
  }

} 
