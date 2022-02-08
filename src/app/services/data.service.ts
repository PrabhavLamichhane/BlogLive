import { HttpClient, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AppError } from '../shared/errors/app-error';
import { BadInput } from '../shared/errors/bad-input';
import { NotFoundError } from '../shared/errors/not-found-error';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class DataService {

  constructor(
    public url: string,
    public http: HttpClient,
  ) { }

  getAll(query) {
    return this.http.get(this.url + this.getQueryString(query))
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  getOne(id: any) {
    return this.http.get(this.url + '/' + id)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }


  // add this on seperate file later on
  handleError(error: any) {
    if (error.status === 400)
      return throwError(new BadInput(error.error));

    if (error.status === 404)
      return throwError(new NotFoundError(error.error));

    return throwError(new AppError(error.error));

  }

  public getQueryString(query) {
    let queryString = '?';
    for (let key in query) {
      queryString += key + '=' + query[key] + '&';
    }
    return queryString;
  }

}