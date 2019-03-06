import { Component, OnInit } from '@angular/core';
import { MaterielService } from '../../module-materiel.service';
import { Ordinateur } from '../../materiel';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-add-ordinateur',
  templateUrl: './add-ordinateur.component.html',
  styleUrls: ['./add-ordinateur.component.css']
})
export class AddOrdinateurComponent implements OnInit {

  ordinateurs;
  selectedOrdinateur: Ordinateur;

  constructor(private materielService: MaterielService) { }

  ngOnInit() {
    this.getOrdinateurs();
  }
  onSelectOrdi(ordinateur: Ordinateur): void {
    this.selectedOrdinateur = ordinateur;
  }
  getOrdinateurs(): void {
    this.materielService.getOrdinateur()
      .subscribe(ordinateurs => this.ordinateurs = ordinateurs);
  }

} 
