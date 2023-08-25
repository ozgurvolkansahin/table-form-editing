import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-cell',
  templateUrl: './price-cell.component.html',
  styleUrls: ['./price-cell.component.scss'],
})
export class PriceCellComponent {
  @Input() price: number = 0;
  @Input() currency: string | any = '';
}
