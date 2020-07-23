import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  apiUrl = environment.apiUrl + 'Individual'
  constructor(
    private http: HttpClient
  ) { }

  getEntities(): Observable<any> {
    return this.http.get(this.apiUrl)
  }

}
