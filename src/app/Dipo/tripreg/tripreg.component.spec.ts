import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripregComponent } from './tripreg.component';

describe('TripregComponent', () => {
  let component: TripregComponent;
  let fixture: ComponentFixture<TripregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
