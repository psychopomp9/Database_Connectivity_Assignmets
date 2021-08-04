import { Component, OnInit } from '@angular/core';
import { Manga } from '../manga';
import { MangaServiceService } from '../manga-service.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [MangaServiceService]
})
export class HomeListComponent implements OnInit {

  mangas: Manga[]

  constructor(private mangaService: MangaServiceService) { }

  ngOnInit(): void {
    this.mangaService
      .getMangas()
      .then((mangas: Manga[]) => {
        this.mangas = mangas.map(manga => {
          return manga;
        });
      });
  }

  pageContent = {
    header: {
      title: 'List of Mangas',
    },
    body: 'add Missing Manga'  
  }

}
