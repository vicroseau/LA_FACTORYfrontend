import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcompComponent } from './ajoutcomp.component';

describe('AjoutcompComponent', () => {
  let component: AjoutcompComponent;
  let fixture: ComponentFixture<AjoutcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
