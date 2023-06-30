import { EventEmitter, Injectable, Output } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class NavBarService {


  selectedFilters: {key: string, value: string}[] = []


  @Output() changeSelectedFilter: EventEmitter<{key: string, value: string}[]> = new EventEmitter()


  addFilter(filters: {key: string, value: string}[]) {
    this.selectedFilters = filters
    this.changeSelectedFilter.emit(this.selectedFilters)
  }


}
