import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrenotazioneComponent } from './form-prenotazione.component';

describe('FormPrenotazioneComponent', () => {
  let component: FormPrenotazioneComponent;
  let fixture: ComponentFixture<FormPrenotazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrenotazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
