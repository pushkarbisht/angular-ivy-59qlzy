import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewComponent } from './view.component';
import { EditComponent } from './edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ViewComponent, EditComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
