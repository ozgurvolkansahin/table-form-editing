import { Component, Input } from '@angular/core';
import { getInstockClass } from '../datatable.helper';

@Component({
  selector: 'app-instock-cell',
  templateUrl: './instock-cell.component.html',
  styleUrls: ['./instock-cell.component.scss'],
})
export class InstockCellComponent {
  @Input() instock: boolean | any = false;

  getInstockClass() {
    return getInstockClass(this.instock);
  }
}
