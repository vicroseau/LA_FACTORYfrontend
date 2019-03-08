import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleHumainComponent } from './module-humain.component';

describe('ModuleHumainComponent', () => {
  let component: ModuleHumainComponent;
  let fixture: ComponentFixture<ModuleHumainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleHumainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleHumainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
