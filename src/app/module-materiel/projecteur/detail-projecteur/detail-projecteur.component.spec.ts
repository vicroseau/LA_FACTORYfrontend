import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProjecteurComponent } from './detail-projecteur.component';

describe('DetailProjecteurComponent', () => {
  let component: DetailProjecteurComponent;
  let fixture: ComponentFixture<DetailProjecteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProjecteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProjecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
