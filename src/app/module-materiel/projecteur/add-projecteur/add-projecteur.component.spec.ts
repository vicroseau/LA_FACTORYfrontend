import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjecteurComponent } from './add-projecteur.component';

describe('AddProjecteurComponent', () => {
  let component: AddProjecteurComponent;
  let fixture: ComponentFixture<AddProjecteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjecteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
