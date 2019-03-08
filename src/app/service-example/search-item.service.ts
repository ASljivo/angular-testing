import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SearchItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SearchItemService {
  apiRoot = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) {}

  searchMethod(term: string): Observable<SearchItem> {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL).pipe(
      map((res: SearchItem) => {
        return res;
      })
    );
  }
}
