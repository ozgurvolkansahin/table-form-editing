import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { EditComponent } from './datatable/actions/edit/edit.component';
import { PriceCellComponent } from './datatable/price-cell/price-cell.component';
import { InstockCellComponent } from './datatable/instock-cell/instock-cell.component';
import { HpCellComponent } from './datatable/hp-cell/hp-cell.component';
import { ColorCellComponent } from './datatable/color-cell/color-cell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { PaginationComponent } from './pagination/pagination.component';
import { FormErrorLabelComponent } from './component/form-error-label/form-error-label.component';

@NgModule({
  declarations: [
    DatatableComponent,
    EditComponent,
    PriceCellComponent,
    InstockCellComponent,
    HpCellComponent,
    ColorCellComponent,
    PaginationComponent,
    FormErrorLabelComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, CoreModule],
  exports: [DatatableComponent, PaginationComponent],
})
export class SharedModule {}
