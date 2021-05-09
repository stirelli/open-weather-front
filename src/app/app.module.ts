import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { AppRoutingModule } from './app-routing-module';
import { environment } from '@app/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule.forRoot(), AppRoutingModule, environment.production ? [] : AkitaNgDevtools.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
