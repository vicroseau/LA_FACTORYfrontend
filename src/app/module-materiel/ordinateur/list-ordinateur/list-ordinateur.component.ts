import { Component, OnInit } from '@angular/core';
import { MaterielService } from '../../module-materiel.service';
import { Ordinateur } from '../../materiel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-ordinateur',
  templateUrl: './list-ordinateur.component.html',
  styleUrls: ['./list-ordinateur.component.css']
})
export class ListOrdinateurComponent implements OnInit {

  ordinateurs:Ordinateur[];

  constructor(
    private materielService: MaterielService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getOrdinateurs();
  }

  getOrdinateurs() {
    return this.materielService.getOrdinateurs()
               .subscribe(
                ordinateurs => {
                  console.log(ordinateurs);
                  this.ordinateurs = ordinateurs
                 }
                );
 }

 goBack(): void {
  this.location.back();
}

}
