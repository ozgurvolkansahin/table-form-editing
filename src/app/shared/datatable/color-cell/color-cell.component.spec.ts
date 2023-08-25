import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCellComponent } from './color-cell.component';

describe('ColorCellComponent', () => {
  let component: ColorCellComponent;
  let fixture: ComponentFixture<ColorCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorCellComponent]
    });
    fixture = TestBed.createComponent(ColorCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
