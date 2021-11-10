import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragserfassungComponent } from './auftragserfassung.component';

describe('AuftragserfassungComponent', () => {
  let component: AuftragserfassungComponent;
  let fixture: ComponentFixture<AuftragserfassungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuftragserfassungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftragserfassungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
