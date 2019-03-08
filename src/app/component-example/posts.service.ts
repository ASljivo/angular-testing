import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Post } from '../models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PostsService {
  private heroesUrl = 'https://jsonplaceholder.typicode.com/posts'; // URL to web api

  constructor(private http: HttpClient) {}

  /** GET posts from the server */
  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.heroesUrl)
      .pipe(tap(posts => console.log(`fetched posts`)));
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .get<Post>(url)
      .pipe(tap(_ => console.log(`fetched post id=${id}`)));
  }

  /** DELETE: delete the post from the server */
  deletePost(id: number): Observable<Post> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http
      .delete<Post>(url, httpOptions)
      .pipe(tap(_ => console.log(`deleted post id=${id}`)));
  }
}
