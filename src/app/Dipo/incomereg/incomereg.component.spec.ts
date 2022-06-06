import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeregComponent } from './incomereg.component';

describe('IncomeregComponent', () => {
  let component: IncomeregComponent;
  let fixture: ComponentFixture<IncomeregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
