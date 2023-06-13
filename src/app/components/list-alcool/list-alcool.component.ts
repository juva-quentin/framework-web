import {Component, EventEmitter, Input, Output} from '@angular/core'
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


  constructor(private router: Router) {
  }
  details(id: string) {
    this.getDetails.emit(id)
  }
}
