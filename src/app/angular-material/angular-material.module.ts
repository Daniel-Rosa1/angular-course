import { NgModule } from "@angular/core";

import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  imports: [
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [
    provideNativeDateAdapter()
  ],
})

export class AngularMaterialModule {

}
