import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdepoComponent } from './viewdepo.component';

describe('ViewdepoComponent', () => {
  let component: ViewdepoComponent;
  let fixture: ComponentFixture<ViewdepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
