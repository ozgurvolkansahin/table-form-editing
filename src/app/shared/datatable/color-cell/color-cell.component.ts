import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-cell',
  templateUrl: './color-cell.component.html',
  styleUrls: ['./color-cell.component.scss'],
})
export class ColorCellComponent {
  @Input() color: string = '';
}
