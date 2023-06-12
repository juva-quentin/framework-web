import { Component, Input } from '@angular/core'
import { Alcool } from '@models/alcool'

@Component({
  selector: 'app-alcool',
  templateUrl: './alcool.component.html',
  styleUrls: ['./alcool.component.scss']
})
export class AlcoolComponent {
  @Input()
  alcool!: Alcool
}
