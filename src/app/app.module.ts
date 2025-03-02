import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducer';
// import { CounterDispalyComponent } from './counter-dispaly/counter-dispaly.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';

@NgModule({
  declarations: [
    AppComponent,
    // CounterDispalyComponent,
    CounterButtonComponent,
    CounterDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
