import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeviewComponent } from './incomeview.component';

describe('IncomeviewComponent', () => {
  let component: IncomeviewComponent;
  let fixture: ComponentFixture<IncomeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
