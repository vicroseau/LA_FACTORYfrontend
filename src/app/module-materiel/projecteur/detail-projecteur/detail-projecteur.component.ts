import { Component, OnInit } from '@angular/core';
import { MaterielService } from '../../module-materiel.service';
import { Projecteur } from '../../materiel';
import { Location } from '@angular/common';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-projecteur',
  templateUrl: './detail-projecteur.component.html',
  styleUrls: ['./detail-projecteur.component.css']
})
export class DetailProjecteurComponent implements OnInit {

  projecteur= new Projecteur();
  submitted = false;
  message: string;

  constructor(
    private materielService: MaterielService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('code');
    this.materielService.getProjecteur(id)
      .subscribe(projecteur => this.projecteur = projecteur);
  }

  update(): void {
    this.submitted = true;
    this.materielService.updateProjecteur(this.projecteur)
        .subscribe(() => this.message = "Projecteur : Succes MAJ !");
  }
 
  delete(): void {
    this.submitted = true;
    this.materielService.deleteProjecteur(this.projecteur)
        .subscribe(()=> this.message = "Projecteur : Succes Suppression !");
  }
 
  goBack(): void {
    this.location.back();
  }

}
