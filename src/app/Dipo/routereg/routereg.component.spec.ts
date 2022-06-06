import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteregComponent } from './routereg.component';

describe('RouteregComponent', () => {
  let component: RouteregComponent;
  let fixture: ComponentFixture<RouteregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
