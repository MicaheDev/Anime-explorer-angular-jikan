import { Component } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent {
  users = ['manuel', 'johan'];
  info: any = {};
  animes: any[] = [];

  constructor(private animeService: AnimeService) {}

  ngOnInit() {
    this.animeService.getAnimes().subscribe((data) => {
      this.animes = data.data;
      this.info = data.pagination;
      console.log(this.animes);
    });
  }
}
