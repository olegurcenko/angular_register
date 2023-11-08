// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyInputComponent } from './Components/input/myinput.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

