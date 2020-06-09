import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ItemComponent } from './item/item.component';
import { ListeComponent } from './liste/liste.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ItemComponent, ListeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
