import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCellComponent } from './price-cell.component';

describe('PriceCellComponent', () => {
  let component: PriceCellComponent;
  let fixture: ComponentFixture<PriceCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceCellComponent]
    });
    fixture = TestBed.createComponent(PriceCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
