import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends DataService {
  constructor(http: HttpClient) {
    super('http://localhost:3900/api/blogs', http);
  }
 
}