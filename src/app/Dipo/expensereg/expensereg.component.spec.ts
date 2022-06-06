import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseregComponent } from './expensereg.component';

describe('ExpenseregComponent', () => {
  let component: ExpenseregComponent;
  let fixture: ComponentFixture<ExpenseregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
