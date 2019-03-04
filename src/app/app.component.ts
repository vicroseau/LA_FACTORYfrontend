import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public show: boolean = false;
  public show1: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;
  public show4: boolean = false;
  public show5: boolean = false;
  public showAll: boolean = false;

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
onSel(){
  location.reload();

}

  onSelForm() {
    this.show = !this.show;
    this.showAll = !this.showAll;
  }
  onSelMtr() {
    this.show1 = !this.show1;
    this.showAll = !this.showAll;
  }
  onSelMtl() {
    this.show2 = !this.show2;
    this.showAll = !this.showAll;
  }
  onSelPla() {
    this.show3 = !this.show3;
    this.showAll = !this.showAll;
  }
  onSelSal() {
    this.show4 = !this.show4;
    this.showAll = !this.showAll;
  }
  onSelRes() {
    this.show5 = !this.show5;
    this.showAll = !this.showAll;
  }

}
