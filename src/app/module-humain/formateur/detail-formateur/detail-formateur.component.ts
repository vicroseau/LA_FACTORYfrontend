import { Component, OnInit } from '@angular/core';
import { ModuleHumainService } from '../../module-humain.service';
import { Formateur } from '../../humain';
import { Location } from '@angular/common';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-formateur',
  templateUrl: './detail-formateur.component.html',
  styleUrls: ['./detail-formateur.component.css']
})
export class DetailFormateurComponent implements OnInit {

  formateur= new Formateur();
  submitted = false;
  message: string;

  constructor(
    private humainService: ModuleHumainService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('code');
    this.humainService.getFormateur(id)
      .subscribe(formateur => this.formateur = formateur);
  }

  update(): void {
    this.submitted = true;
    this.humainService.updateFormateur(this.formateur)
        .subscribe(() => this.message = "Formateur : Succes MAJ !");
  }
 
  delete(): void {
    this.submitted = true;
    this.humainService.deleteFormateur(this.formateur)
        .subscribe(()=> this.message = "Formateur : Succes Suppression !");
  }
 
  goBack(): void {
    this.location.back();
  }

}
