import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleRestitutionComponent } from './module-restitution.component';

describe('ModuleRestitutionComponent', () => {
  let component: ModuleRestitutionComponent;
  let fixture: ComponentFixture<ModuleRestitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleRestitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleRestitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
