import { IHttpResult } from './../interface/http.interface';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CarData } from '../data/car.data';
import { SharedHttpData } from '../data/http.data';
import { ICar } from '../interface/car.interface';

@Injectable({
  providedIn: 'root',
})
export class CarService implements CarData {
  constructor(private http: SharedHttpData) {}

  getCars(page: number, pageSize: number): Observable<IHttpResult<ICar[]>> {
    return this.http.get<ICar[]>('assets/data.json').pipe(
      map((cars) => {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        return {
          data: cars.slice(start, end),
          total: cars.length,
        };
      })
    );
  }
}
