import { TestBed } from '@angular/core/testing'

import { AlcoolService } from './alcool-service.service'

describe('AlcoolService', () => {
  let service: AlcoolService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AlcoolService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
