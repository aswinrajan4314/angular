import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripviewComponent } from './tripview.component';

describe('TripviewComponent', () => {
  let component: TripviewComponent;
  let fixture: ComponentFixture<TripviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
