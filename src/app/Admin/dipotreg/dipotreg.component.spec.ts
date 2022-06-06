import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipotregComponent } from './dipotreg.component';

describe('DipotregComponent', () => {
  let component: DipotregComponent;
  let fixture: ComponentFixture<DipotregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipotregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipotregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
