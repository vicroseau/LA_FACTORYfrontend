import { Component, OnInit } from '@angular/core';
import { ModuleHumainService } from '../../module-humain.service';
import { Formateur } from '../../humain';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-formateur',
  templateUrl: './list-formateur.component.html',
  styleUrls: ['./list-formateur.component.css']
})
export class ListFormateurComponent implements OnInit {

  formateurs:Formateur[];

  constructor(
    private humainService: ModuleHumainService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getFormateurs();
  }

  getFormateurs() {
    return this.humainService.getFormateurs()
               .subscribe(
                formateurs => {
                  console.log(formateurs);
                  this.formateurs = formateurs
                 }
                );
 }

 goBack(): void {
  this.location.back();
}

}
