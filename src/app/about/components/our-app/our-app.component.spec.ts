import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAppComponent } from './our-app.component';

describe('OurAppComponent', () => {
  let component: OurAppComponent;
  let fixture: ComponentFixture<OurAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurAppComponent]
    });
    fixture = TestBed.createComponent(OurAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
