import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EpisodeComponent } from './components/episode/episode.component';
import { LocationComponent } from './components/location/location.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {ExtractNumberPipe} from "./extractNumber.pipe";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchBarComponent,
    CharacterDetailComponent,
    EpisodeComponent,
    LocationComponent,
    ExtractNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatChipsModule,
    MatIconModule,
    DragDropModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
