import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewzoneComponent } from './viewzone.component';

describe('ViewzoneComponent', () => {
  let component: ViewzoneComponent;
  let fixture: ComponentFixture<ViewzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
