import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipoeditComponent } from './dipoedit.component';

describe('DipoeditComponent', () => {
  let component: DipoeditComponent;
  let fixture: ComponentFixture<DipoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DipoeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DipoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
