import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { JumboComponent } from './First-Sample/jumbo.component';
import { CardComponent } from './First-Sample/card.component';
import { FirstSampleComponent } from './First-Sample/first-sample.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ExtensionComponent } from './databinding/extension.component';

@NgModule({
  declarations: [
    AppComponent, 
    JumboComponent,
    CardComponent,
    FirstSampleComponent,
    DatabindingComponent,
    ExtensionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
