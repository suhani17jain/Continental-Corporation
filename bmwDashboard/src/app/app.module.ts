import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import { Ng5SliderModule } from 'ng5-slider';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardViewComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    Ng5SliderModule,
    MatFormFieldModule,
    MatTableModule,
    MatSelectModule,
    InfiniteScrollModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
