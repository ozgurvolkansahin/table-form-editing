import { Component } from '@angular/core';

@Component({
  selector: 'ngx-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class Layout {
  date = new Date();
}
