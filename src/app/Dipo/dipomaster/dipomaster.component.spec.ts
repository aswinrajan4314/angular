import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipomasterComponent } from './dipomaster.component';

describe('DipomasterComponent', () => {
  let component: DipomasterComponent;
  let fixture: ComponentFixture<DipomasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipomasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipomasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
