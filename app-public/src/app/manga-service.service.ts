import { Injectable } from '@angular/core';
import { Manga } from './manga';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MangaServiceService {
  private mangasUrl = 'http://localhost:3000/api/mangas'
  constructor(private http:HttpClient) { }

  getMangas(): Promise<void | Manga[]>{
    return this.http.get(this.mangasUrl)
      .toPromise()
      .then(response => response as Manga[])
      .catch(this.handleError);
  }

  getSingleManga(mangaId: string): Promise<void | Manga>{
    return this.http.get(this.mangasUrl + '/' + mangaId)
      .toPromise()
      .then(response => response as Manga)
      .catch(this.handleError);
  }

  createManga(newManga: Manga): Promise<void | Manga>{
    return this.http.post(this.mangasUrl, newManga)
      .toPromise()
      .then(response => response as Manga)
      .catch(this.handleError);
  }

  updatedManga(mangaId: string, newManga: Manga): Promise<void | Manga>{
    return this.http.put(this.mangasUrl + '/' + mangaId, newManga)
      .toPromise()
      .then(response => response as Manga)
      .catch(this.handleError);
  }

  deleteManga(mangaId: string): Promise<void | Manga>{
    // console.log(mangaId);
    return this.http.delete(this.mangasUrl + '/' + mangaId)
      .toPromise()
      .then(response => response as Manga)
      .catch(this.handleError);
  }

  private handleError(error: any){
    console.log("error");
  }
}
