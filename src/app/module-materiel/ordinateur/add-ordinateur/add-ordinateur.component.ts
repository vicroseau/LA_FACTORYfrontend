import { Component, OnInit } from '@angular/core';
import { MaterielService } from '../../module-materiel.service';
import { Ordinateur } from '../../materiel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-ordinateur',
  templateUrl: './add-ordinateur.component.html',
  styleUrls: ['./add-ordinateur.component.css']
})
export class AddOrdinateurComponent implements OnInit {

  ordinateur = new Ordinateur();
  selectedOrdinateur: Ordinateur;
  submitted = false;

  ngOnInit() {
  }

  constructor(
    private materielService: MaterielService,
    private location: Location
  ) { }

  newOrdinateur(): void {
    this.submitted = false;
    this.ordinateur = new Ordinateur();
  }

  addOrdinateur() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.materielService.addOrdinateur(this.ordinateur).subscribe();
  }

} 
