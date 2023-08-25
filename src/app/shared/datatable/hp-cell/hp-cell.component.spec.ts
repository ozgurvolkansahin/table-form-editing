import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpCellComponent } from './hp-cell.component';

describe('HpCellComponent', () => {
  let component: HpCellComponent;
  let fixture: ComponentFixture<HpCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HpCellComponent]
    });
    fixture = TestBed.createComponent(HpCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
