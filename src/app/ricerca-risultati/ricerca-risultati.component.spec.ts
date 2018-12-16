import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaRisultatiComponent } from './ricerca-risultati.component';

describe('RicercaRisultatiComponent', () => {
  let component: RicercaRisultatiComponent;
  let fixture: ComponentFixture<RicercaRisultatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaRisultatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaRisultatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
