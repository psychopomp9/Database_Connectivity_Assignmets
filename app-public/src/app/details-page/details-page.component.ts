import { Component, OnInit } from '@angular/core';
import { Manga } from '../manga';
import { MangaServiceService } from '../manga-service.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
// import { Moment } from 'moment';


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
      publication_year: null,
      reviews: null
    },
    id: ''
  }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.mangaService.getSingleManga(params.mangaid);
    }))
      .subscribe((newManga: Manga) => {
        // console.log('Selected Manga', newManga);
        //  let date = newManga.publication_year;
        // var moment = require('moment');
        // let month = moment(date).format('YYYY-MM-DD');
        // console.log(month);
        
        this.newManga = newManga;
        this.pageContent.header.title = newManga.title;
        this.pageContent.body.author = newManga.author;
        this.pageContent.body.description = newManga.description;
        this.pageContent.body.price = newManga.price;
        this.pageContent.body.publication_year = newManga.publication_year;
        this.pageContent.id = newManga._id;
        this.pageContent.body.reviews = newManga.reviews;
      });
  }

  mangaId: string;

  public deleteThisManga(mangaId: string): void{
    this.mangaService.deleteManga(mangaId);
  }

  public updateThisManga(newManga: Manga): void{
    this.mangaService.updatedManga(newManga._id, newManga);
  }

  public toggleFunc(){
    var tForm = document.getElementById("more");
    (tForm.style.display == "none") ? tForm.style.display = "block" : tForm.style.display = "none";
  }
}
