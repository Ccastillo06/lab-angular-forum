import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// Add Observable and map property to it.
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
// Import Thread model.
import { Thread } from '../models/thread.model';

@Injectable()
export class ThreadService {
  url : string = 'http://localhost:3000/api/threads';

  constructor(private http : Http) {}

  getThreads() : Observable<Array<Thread>> {
    return this.http.get(this.url)
      .map( (res : Response) => {
        return res.json();
      })
      .catch( (err : any) => {
        return Observable.throw(err.statusText);
      })
  }
}
