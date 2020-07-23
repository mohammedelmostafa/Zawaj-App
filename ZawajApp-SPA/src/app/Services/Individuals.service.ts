import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndividualsService {

  apiUrl = environment.apiUrl + 'Individual';

  constructor(
    private http: HttpClient
  ) { }

  getIndividuals(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
