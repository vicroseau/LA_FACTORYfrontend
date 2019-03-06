import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdinateurComponent } from './add-ordinateur.component';

describe('AddOrdinateurComponent', () => {
  let component: AddOrdinateurComponent;
  let fixture: ComponentFixture<AddOrdinateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrdinateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
