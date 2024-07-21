import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsaleProductComponent } from './offsale-product.component';

describe('OffsaleProductComponent', () => {
  let component: OffsaleProductComponent;
  let fixture: ComponentFixture<OffsaleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffsaleProductComponent]
    });
    fixture = TestBed.createComponent(OffsaleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
