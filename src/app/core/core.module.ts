import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { SharedModule } from '@app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule, CommonModule, SharedModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
