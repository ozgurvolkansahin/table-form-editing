import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Input() pageSize: number = 10;
  @Input() collectionSize: number = 15;

  @Output() onPageChanged: EventEmitter<number> = new EventEmitter();

  get totalPages(): number {
    return Math.ceil(this.collectionSize / this.pageSize);
  }

  pageChanged(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.onPageChanged.emit(page);
  }
}
