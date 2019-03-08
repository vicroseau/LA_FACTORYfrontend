import { Component, OnInit } from '@angular/core';
import { ModuleHumainService } from '../../module-humain.service';
import { Formateur } from '../../humain';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {

  formateur = new Formateur();
  selectedFormateur: Formateur;
  submitted = false;

  ngOnInit() {
  }

  constructor(
    private humainService: ModuleHumainService,
    private location: Location
  ) { }

  newFormateur(): void {
    this.submitted = false;
    this.formateur = new Formateur();
  }

  addFormateur() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.humainService.addFormateur(this.formateur).subscribe();
  }

} 
