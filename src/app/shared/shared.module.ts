import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '.';
@NgModule({
  imports: [CommonModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [SearchComponent],
  exports: [SearchComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
