import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuDiNoiComponent } from './su-di-noi.component';

describe('SuDiNoiComponent', () => {
  let component: SuDiNoiComponent;
  let fixture: ComponentFixture<SuDiNoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuDiNoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuDiNoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
