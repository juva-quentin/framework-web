import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Alcool, Drinks } from '@models/alcool'

@Injectable({
  providedIn: 'root'
})
export class AlcoolService {

  private baseUrl = 'http://www.thecocktaildb.com/api/json/v1/1/'

  constructor(private httpClient: HttpClient) { }

  search(title: string): Observable<Drinks> {
    return this.httpClient.get<Drinks>(`${this.baseUrl}/search.php`, {
      params: new HttpParams().set('s', title)
    })
  }

  randomAlcool(): Observable<Drinks> {
    return this.httpClient.get<Drinks>(`${this.baseUrl}/random.php`)
  }

  alcoolicAlcool(): Observable<Drinks> {
    return this.httpClient.get<Drinks>(`${this.baseUrl}/filter.php?a=Alcoholic`)
  }

}
