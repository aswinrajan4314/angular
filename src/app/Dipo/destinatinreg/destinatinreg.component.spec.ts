import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinatinregComponent } from './destinatinreg.component';

describe('DestinatinregComponent', () => {
  let component: DestinatinregComponent;
  let fixture: ComponentFixture<DestinatinregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinatinregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinatinregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
