import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedHttpData } from './data/http.data';
import { SharedHttpService } from './service/http.service';
import { CarData } from './data/car.data';
import { CarService } from './service/car.service';
import { AlphaNumericDirective } from './directive/alphanumeric.directive';

const DATA_SERVICE = [
  {
    provide: SharedHttpData,
    useClass: SharedHttpService,
  },
  {
    provide: CarData,
    useClass: CarService,
  },
];

@NgModule({
  declarations: [AlphaNumericDirective],
  imports: [CommonModule],
  exports: [AlphaNumericDirective],
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [...DATA_SERVICE],
    };
  }
}
