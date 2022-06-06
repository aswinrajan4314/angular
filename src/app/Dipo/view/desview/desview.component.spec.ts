import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesviewComponent } from './desview.component';

describe('DesviewComponent', () => {
  let component: DesviewComponent;
  let fixture: ComponentFixture<DesviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
