import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstockCellComponent } from './instock-cell.component';

describe('InstockCellComponent', () => {
  let component: InstockCellComponent;
  let fixture: ComponentFixture<InstockCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstockCellComponent]
    });
    fixture = TestBed.createComponent(InstockCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
