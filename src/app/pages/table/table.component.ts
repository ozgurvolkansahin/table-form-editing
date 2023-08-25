import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICar } from 'src/app/core/interface/car.interface';
import { Subscription } from 'rxjs';
import { CarData } from 'src/app/core/data/car.data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  carData: ICar[] = [];
  pageSize: number = 10;
  page: number = 1;
  total: number = 0;
  subscription: Subscription = new Subscription();
  constructor(private carService: CarData) {}
  ngOnInit(): void {
    this.subscription = this.carService
      .getCars(this.page, this.pageSize)
      .subscribe((data) => {
        this.carData = data.data;
        this.total = data.total;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onPageChanged(page: number): void {
    this.page = page;
    this.subscription = this.carService
      .getCars(this.page, this.pageSize)
      .subscribe((data) => {
        this.carData = data.data;
        this.total = data.total;
      });
  }
}
