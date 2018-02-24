import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinDirectivesComponent } from './builtin-directives.component';

describe('BuiltinDirectivesComponent', () => {
  let component: BuiltinDirectivesComponent;
  let fixture: ComponentFixture<BuiltinDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltinDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltinDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
