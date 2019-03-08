import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjecteurComponent } from './list-projecteur.component';

describe('ListProjecteurComponent', () => {
  let component: ListProjecteurComponent;
  let fixture: ComponentFixture<ListProjecteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProjecteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
