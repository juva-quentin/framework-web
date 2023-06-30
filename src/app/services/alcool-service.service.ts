import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Drinks } from '@models/alcool'
import { Ingredient } from '@models/Ingredient'
import { Glass } from '@models/Glass'
import { Category } from '@models/Category'

@Injectable({
  providedIn: 'root'
})
export class AlcoolService {

  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1'
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
    return this.httpClient.get<Drinks>(`${this.baseUrl}/filter.php`, {
        params: new HttpParams().set('a', 'Alcoholic')
      })
  }

  noAlcoolicAlcool(): Observable<Drinks> {
    return this.httpClient.get<Drinks>(`${this.baseUrl}/filter.php`, {
      params: new HttpParams().set('a', 'Non_Alcoholic')
    })
  }

  alcoolDetails(id: string): Observable<Drinks> {
    return this.httpClient.get<Drinks>(`${this.baseUrl}/lookup.php`, {
      params: new HttpParams().set('i', id)
    })
  }

  getIngredients(): Observable<Ingredient> {
    return this.httpClient.get<Ingredient>(`${this.baseUrl}/list.php`, {
      params: new HttpParams().set('i', 'list')
    })
  }

  getGlass(): Observable<Glass> {
    return this.httpClient.get<Glass>(`${this.baseUrl}/list.php`, {
      params: new HttpParams().set('g', 'list')
    })
  }

  getCategory(): Observable<Category> {
    return this.httpClient.get<Category>(`${this.baseUrl}/list.php`, {
      params: new HttpParams().set('c', 'list')
    })
  }

  alcoolWithFilter(filter : {key: string, value: string}[]) {
    let params = new HttpParams()

    for (const param of filter) {
      params = params.append(param.key, param.value)
    }

    return this.httpClient.get<Drinks>(`${this.baseUrl}/filter.php`, {
      params: params
    })
  }

}
