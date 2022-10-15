import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { LocationComponent } from './components/location/location.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'character/:id', component: CharacterDetailComponent
  },
  {
    path: 'search/:character-search',
    component: DashboardComponent
  },
  {
    path: 'episode/:id',
    component: EpisodeComponent
  },
  {
    path: 'location/:id',
    component: LocationComponent
  },
  {
    path: '**',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
