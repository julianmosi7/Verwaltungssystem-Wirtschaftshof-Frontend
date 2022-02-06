import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragserfassungDialogComponent } from './auftragserfassung-dialog.component';

describe('AuftragserfassungDialogComponent', () => {
  let component: AuftragserfassungDialogComponent;
  let fixture: ComponentFixture<AuftragserfassungDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuftragserfassungDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftragserfassungDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
