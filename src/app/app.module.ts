import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingOverlayComponent } from './shared/loading-overlay/loading-overlay.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingOverlayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
