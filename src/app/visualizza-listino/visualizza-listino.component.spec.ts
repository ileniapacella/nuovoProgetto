import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaListinoComponent } from './visualizza-listino.component';

describe('VisualizzaListinoComponent', () => {
  let component: VisualizzaListinoComponent;
  let fixture: ComponentFixture<VisualizzaListinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizzaListinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaListinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
