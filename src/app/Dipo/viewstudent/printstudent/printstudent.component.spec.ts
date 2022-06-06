import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintstudentComponent } from './printstudent.component';

describe('PrintstudentComponent', () => {
  let component: PrintstudentComponent;
  let fixture: ComponentFixture<PrintstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
