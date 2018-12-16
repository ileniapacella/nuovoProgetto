import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenotaVisitaComponent } from './prenota-visita.component';

describe('PrenotaVisitaComponent', () => {
  let component: PrenotaVisitaComponent;
  let fixture: ComponentFixture<PrenotaVisitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenotaVisitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotaVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
