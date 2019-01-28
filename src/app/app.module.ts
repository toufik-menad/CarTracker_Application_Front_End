import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ElectriccarComponent } from './components/electriccar/electriccar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ElectriccarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  entryComponents: [ElectriccarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
