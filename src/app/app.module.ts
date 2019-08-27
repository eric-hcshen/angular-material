import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MaterialTestComponent } from './material-test/material-test.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MatButtonModule, MatCheckboxModule, MatTableModule ],  
  exports:      [MatButtonModule, MatCheckboxModule, MatTableModule],
  declarations: [ AppComponent, HelloComponent, MaterialTestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
