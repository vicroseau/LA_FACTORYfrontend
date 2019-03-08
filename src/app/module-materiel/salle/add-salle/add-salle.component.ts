import { Component, OnInit } from '@angular/core';
import { MaterielService } from '../../module-materiel.service';
import { Salle } from '../../materiel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent implements OnInit {

  salle = new Salle();
  selectedSalle: Salle;
  submitted = false;

  ngOnInit() {
  }

  constructor(
    private materielService: MaterielService,
    private location: Location
  ) { }

  newSalle(): void {
    this.submitted = false;
    this.salle = new Salle();
  }

  addSalle() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.materielService.addSalle(this.salle).subscribe();
  }

} 
