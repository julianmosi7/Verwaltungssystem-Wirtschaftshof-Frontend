import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuftragszuweisungComponent } from './auftragszuweisung.component';

describe('AuftragszuweisungComponent', () => {
  let component: AuftragszuweisungComponent;
  let fixture: ComponentFixture<AuftragszuweisungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuftragszuweisungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuftragszuweisungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
