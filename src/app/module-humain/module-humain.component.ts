import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ModuleHumainService } from './module-humain.service';

@Component({
  selector: 'app-module-humain',
  templateUrl: './module-humain.component.html',
  styleUrls: ['./module-humain.component.css']
})
export class ModuleHumainComponent implements OnInit {

  constructor(private humainService: ModuleHumainService,private location: Location) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
}
