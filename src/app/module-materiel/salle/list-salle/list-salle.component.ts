import { Component, OnInit } from '@angular/core';
import { MaterielService } from '../../module-materiel.service';
import { Salle } from '../../materiel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-salle',
  templateUrl: './list-salle.component.html',
  styleUrls: ['./list-salle.component.css']
})
export class ListSalleComponent implements OnInit {

  salles:Salle[];

  constructor(
    private materielService: MaterielService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSalles();
  }

  getSalles() {
    return this.materielService.getSalles()
               .subscribe(
                salles => {
                  console.log(salles);
                  this.salles = salles
                 }
                );
 }

 goBack(): void {
  this.location.back();
}

}
