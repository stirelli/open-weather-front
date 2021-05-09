import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent, SpinnerComponent, ShareBtnComponent, ShareComponent } from '.';
@NgModule({
  imports: [CommonModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [SearchComponent, SpinnerComponent, ShareBtnComponent, ShareComponent],
  exports: [SearchComponent, SpinnerComponent, ShareBtnComponent, ShareComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
