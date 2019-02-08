import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopoverComponent } from './popover/popover.component';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [
    AppComponent,
    PopoverComponent,
    TestDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
