import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-label',
  templateUrl: './form-error-label.component.html',
  styleUrls: ['./form-error-label.component.scss'],
})
export class FormErrorLabelComponent {
  @Input() error: string = '';
}
