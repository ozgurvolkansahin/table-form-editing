import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ICar } from 'src/app/core/interface/car.interface';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent implements OnInit, OnChanges {
  @Input() data: ICar[] = [];
  @Input() pageSize: number = 10;
  @Input() page: number = 1;
  @Input() total: number = 0;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue.length > 0) {
      this.data = this.data.map((car) => {
        return {
          ...car,
          id: isNaN(+car.id) ? '#' : Number(car.id),
        };
      });
    }
  }
  isIDValid(id: string | number): boolean {
    return !isNaN(+id);
  }
  onDataSaved(car: ICar): void {
    const index = this.data.findIndex((c) => c.id === car.id);
    this.data[index] = car;
  }
}
