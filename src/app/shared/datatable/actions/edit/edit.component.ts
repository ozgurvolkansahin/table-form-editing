import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ICar } from 'src/app/core/interface/car.interface';
import { getColors } from '../../datatable.helper';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() car: ICar = {} as ICar;
  @Output() onDataSaved: EventEmitter<ICar> = new EventEmitter();
  @ViewChild('closeModal') closeModal: any;
  editForm: FormGroup = {} as FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createEditForm();
  }

  createEditForm(): void {
    this.editForm = this.fb.group({
      id: new FormControl({
        value: this.car.id,
        disabled: true,
      }),
      carid: new FormControl({
        value: this.car.carid,
        disabled: true,
      }),
      instock: new FormControl(this.car.instock),
      horsepower: new FormControl(this.car.horsepower, [
        Validators.required,
        Validators.min(100),
        Validators.max(550),
      ]),
      price: new FormControl(this.car.price),
      currency: new FormControl(this.car.currency),
      color: new FormControl(this.car.color),
    });
  }

  get currency(): FormControl {
    return this.editForm.get('currency') as FormControl;
  }
  get price(): FormControl {
    return this.editForm.get('price') as FormControl;
  }

  get horsepower(): FormControl {
    return this.editForm.get('horsepower') as FormControl;
  }

  get colors(): string[] {
    return getColors();
  }
  close() {
    this.car = this.editForm.getRawValue();
    this.onDataSaved.emit(this.car);
    this.closeModal.nativeElement.click();
  }
  isChanged() {
    return (
      JSON.stringify(this.car) !== JSON.stringify(this.editForm.getRawValue())
    );
  }
}
