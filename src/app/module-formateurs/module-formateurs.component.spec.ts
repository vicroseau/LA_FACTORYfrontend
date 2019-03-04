import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFormateursComponent } from './module-formateurs.component';

describe('ModuleFormateursComponent', () => {
  let component: ModuleFormateursComponent;
  let fixture: ComponentFixture<ModuleFormateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleFormateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
