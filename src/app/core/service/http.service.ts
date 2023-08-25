import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedHttpData } from '../data/http.data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedHttpService implements SharedHttpData {
  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
