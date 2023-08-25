import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Layout } from './layout/layout.component';

@NgModule({
  declarations: [HeaderComponent, Layout],
  imports: [CommonModule],
  exports: [Layout],
})
export class ThemeModule {
  static forRoot() {
    return {
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
