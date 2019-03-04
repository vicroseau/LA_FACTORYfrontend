import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleSallesComponent } from './module-salles.component';

describe('ModuleSallesComponent', () => {
  let component: ModuleSallesComponent;
  let fixture: ComponentFixture<ModuleSallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleSallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleSallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
