import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/shared/modules/material.module';

const MODULES = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule
];

@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class LayoutModule { }
