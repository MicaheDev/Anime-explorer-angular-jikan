import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { animeReducer } from './state/anime.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot({app: animeReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
