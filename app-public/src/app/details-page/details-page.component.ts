import { Component, OnInit } from '@angular/core';
import { Manga } from '../manga';
import { MangaServiceService } from '../manga-service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html', 
  styleUrls: ['./details-page.component.css'],
  providers: [MangaServiceService]
})
export class DetailsPageComponent implements OnInit {

  constructor(private mangaService: MangaServiceService, private route: ActivatedRoute) { }

  newManga: Manga;
  pageContent = {
    header: {
      title: '',
    },
    body: {
      author: '',
      description: '',
      price: 0,
      publication_year: null
    },
    id: ''
  }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.mangaService.getSingleManga(params.mangaid);
    }))
      .subscribe((newManga: Manga) => {
        console.log('Selected Manga', newManga);
        this.newManga = newManga;
        this.pageContent.header.title = newManga.title;
        this.pageContent.body.author = newManga.author;
        this.pageContent.body.description = newManga.description;
        this.pageContent.body.price = newManga.price;
        this.pageContent.body.publication_year = newManga.publication_year;
        this.pageContent.id = newManga._id;
      });
  }

  mangaId: string;

  public deleteThisManga(mangaId: string): void{
    this.mangaService.deleteManga(mangaId);
  }
}
