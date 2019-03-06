import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdinateurComponent } from './list-ordinateur.component';

describe('ListOrdinateurComponent', () => {
  let component: ListOrdinateurComponent;
  let fixture: ComponentFixture<ListOrdinateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrdinateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
