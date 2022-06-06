import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipohomeComponent } from './dipohome.component';

describe('DipohomeComponent', () => {
  let component: DipohomeComponent;
  let fixture: ComponentFixture<DipohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipohomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
