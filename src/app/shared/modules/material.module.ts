import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';

const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule {}
