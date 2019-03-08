import { Component, OnInit } from '@angular/core';
import { MaterielService } from '../../module-materiel.service';
import { Projecteur } from '../../materiel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-projecteur',
  templateUrl: './list-projecteur.component.html',
  styleUrls: ['./list-projecteur.component.css']
})
export class ListProjecteurComponent implements OnInit {

  projecteurs:Projecteur[];

  constructor(
    private materielService: MaterielService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProjecteurs();
  }

  getProjecteurs() {
    return this.materielService.getProjecteurs()
               .subscribe(
                projecteurs => {
                  console.log(projecteurs);
                  this.projecteurs = projecteurs
                 }
                );
 }

 goBack(): void {
  this.location.back();
}

}
