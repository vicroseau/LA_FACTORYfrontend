import { Component, OnInit } from '@angular/core';
import { MaterielService } from '../../module-materiel.service';
import { Salle } from '../../materiel';
import { Location } from '@angular/common';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-salle',
  templateUrl: './detail-salle.component.html',
  styleUrls: ['./detail-salle.component.css']
})
export class DetailSalleComponent implements OnInit {

  salle= new Salle();
  submitted = false;
  message: string;

  constructor(
    private materielService: MaterielService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('code');
    this.materielService.getSalle(id)
      .subscribe(salle => this.salle = salle);
  }

  update(): void {
    this.submitted = true;
    this.materielService.updateSalle(this.salle)
        .subscribe(() => this.message = "Salle : Succes MAJ !");
  }
 
  delete(): void {
    this.submitted = true;
    this.materielService.deleteSalle(this.salle)
        .subscribe(()=> this.message = "Salle : Succes Suppression !");
  }
 
  goBack(): void {
    this.location.back();
  }

}
