import { Component, OnInit } from '@angular/core';
import { MaterielService } from '../../module-materiel.service';
import { Ordinateur } from '../../materiel';
import { Location } from '@angular/common';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-ordinateur',
  templateUrl: './detail-ordinateur.component.html',
  styleUrls: ['./detail-ordinateur.component.css']
})
export class DetailOrdinateurComponent implements OnInit {

  ordinateur= new Ordinateur();
  submitted = false;
  message: string;

  constructor(
    private materielService: MaterielService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('code');
    this.materielService.getOrdinateur(id)
      .subscribe(ordinateur => this.ordinateur = ordinateur);
  }

  update(): void {
    this.submitted = true;
    this.materielService.updateOrdinateur(this.ordinateur)
        .subscribe(() => this.message = "Ordinateur : Succes MAJ !");
  }
 
  delete(): void {
    this.submitted = true;
    this.materielService.deleteOrdinateur(this.ordinateur)
        .subscribe(()=> this.message = "Ordinateur : Succes Suppression !");
  }
 
  goBack(): void {
    this.location.back();
  }

}
