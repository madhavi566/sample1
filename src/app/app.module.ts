import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
   BrowserAnimationsModule,
  ],

  declarations: [ AppComponent, ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
