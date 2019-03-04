import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePlanningsComponent } from './module-plannings.component';

describe('ModulePlanningsComponent', () => {
  let component: ModulePlanningsComponent;
  let fixture: ComponentFixture<ModulePlanningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePlanningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePlanningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
