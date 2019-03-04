import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleMatieresComponent } from './module-matieres.component';

describe('ModuleMatiereComponent', () => {
  let component: ModuleMatieresComponent;
  let fixture: ComponentFixture<ModuleMatieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleMatieresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleMatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
