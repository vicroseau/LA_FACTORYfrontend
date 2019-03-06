import { Component, OnInit } from '@angular/core';
import {Formateur} from './formateur';
import {FormateurService} from './module-formateur.service'

@Component({
  selector: 'app-module-formateurs',
  templateUrl: './module-formateurs.component.html',
  styleUrls: ['./module-formateurs.component.css']
})
export class ModuleFormateursComponent implements OnInit {

formateurs;
selectedFormateur: Formateur;


  constructor(private formateurService: FormateurService) { }


  ngOnInit() {
   
this.getFormateurs();

  }
  onSelectFormateur(formateur: Formateur): void{
    this.selectedFormateur=formateur;
    
  }

  
  getFormateurs(): void{
    this.formateurService.getFormateur()
        .subscribe(formateur => this.formateurs = formateur);
  }
  
}