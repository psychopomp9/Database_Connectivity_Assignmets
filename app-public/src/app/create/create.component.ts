import { Component, OnInit } from '@angular/core';
import { MangaServiceService } from '../manga-service.service';
import { Manga } from '../manga';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ MangaServiceService]
})
export class CreateComponent implements OnInit {
  public newManga: Manga = {
    _id: '',
    title: '',
    author: '',
    description: '',
    price: 0,
    publication_year: null,
    reviews: null
  };

  constructor(private mangaService: MangaServiceService) { }

  ngOnInit(): void {
  }

  public createNewManga(newManga: Manga): void{
    this.mangaService.createManga(newManga);
  }

  pageContent= {
    header: {
      title: 'Create New Manga'
    }
  }

}
