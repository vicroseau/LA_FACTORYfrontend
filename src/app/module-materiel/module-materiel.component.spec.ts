import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleMaterielComponent } from './module-materiel.component';

describe('ModuleMaterielComponent', () => {
  let component: ModuleMaterielComponent;
  let fixture: ComponentFixture<ModuleMaterielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleMaterielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
