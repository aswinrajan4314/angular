import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerproComponent } from './managerpro.component';

describe('ManagerproComponent', () => {
  let component: ManagerproComponent;
  let fixture: ComponentFixture<ManagerproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
