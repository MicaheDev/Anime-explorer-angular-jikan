import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AnimeModule } from './anime/anime.module';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime/anime-detail/anime-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'anime', component: AnimeListComponent },
      { path: 'anime/:id', component: AnimeDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AnimeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
