import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Alcool } from '@models/alcool'

@Component({
  selector: 'app-alcool-card',
  templateUrl: './alcool-card.component.html',
  styleUrls: ['./alcool-card.component.scss']
})
export class AlcoolCardComponent {
  @Input()
  alcool!: Alcool

  @Output()
  getDetails = new EventEmitter<string>()
  details(id: string) {
    this.getDetails.emit(id)
  }
}
