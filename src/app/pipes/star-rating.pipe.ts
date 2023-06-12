import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'starRating',
  pure: true
})
export class StarRatingPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value)

    return value === undefined || value == '' ? 'Pas de score' : '★'.repeat(Math.round(+value/20))
  }

}
