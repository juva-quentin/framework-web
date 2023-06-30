import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Alcool } from '@models/alcool'
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-alcool',
  templateUrl: './list-alcool.component.html',
  styleUrls: ['./list-alcool.component.scss']
})
export class ListAlcoolComponent {
  @Input()
  alcoolList!: Alcool[]
  @Input()
  title!: string
  @Output()
  getDetails = new EventEmitter<string>()

  currentPage = 1
  itemsPerPage = 10

  constructor(private router: Router) {
  }
  details(id: string) {
    this.getDetails.emit(id)
  }

  getCurrentPageItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage
    const endIndex = startIndex + this.itemsPerPage

    return this.alcoolList.slice(startIndex, endIndex)
  }
  previousPage() {
    this.currentPage = this.currentPage - 1
  }

  nextPage() {
    this.currentPage = this.currentPage + 1
  }

  getTotalPages() {
    return Math.ceil(this.alcoolList.length / this.itemsPerPage)
  }
}
