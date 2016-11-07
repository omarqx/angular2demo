import {Post} from './post';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostsService {
  private postsUrl = 'http://localhost:3000/posts';
  constructor(private http:Http) { }

  getPostsByUserId(UserId:number): Promise<Post[]> {
    let searchQ = `${this.postsUrl}?userId=${UserId}`;
    return this.http
      .get(searchQ)
      .toPromise()
      .then(response => {
        return response.json() as Post[];
      })
      .catch(this.handleError);
  }

  getPostsByUserId$(UserId:number) : Observable<Post[]> {
         return this.http.get(`${this.postsUrl}?userId=${UserId}`)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
