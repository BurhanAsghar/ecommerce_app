import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalCardsComponent } from './promotional-cards.component';

describe('PromotionalCardsComponent', () => {
  let component: PromotionalCardsComponent;
  let fixture: ComponentFixture<PromotionalCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionalCardsComponent]
    });
    fixture = TestBed.createComponent(PromotionalCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
