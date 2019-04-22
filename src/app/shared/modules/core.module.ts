import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { LayoutModule } from '@app/shared/modules/layout.module';



@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule
  ],
  exports: [LayoutModule, FormsModule]
})
export class CoreModule { }

