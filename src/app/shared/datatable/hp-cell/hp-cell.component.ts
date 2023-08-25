import { Component, Input } from '@angular/core';
import { getHorsepowerClass } from '../datatable.helper';

@Component({
  selector: 'app-hp-cell',
  templateUrl: './hp-cell.component.html',
  styleUrls: ['./hp-cell.component.scss'],
})
export class HpCellComponent {
  @Input() horsepower: number = 0;

  ngOnInit(): void {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  getHPClass() {
    return getHorsepowerClass(this.horsepower);
  }
}
