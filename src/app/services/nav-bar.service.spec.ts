import { TestBed } from '@angular/core/testing'

import { NavBarService } from './nav-bar.service'

describe('NavBarService', () => {
  let service: NavBarService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(NavBarService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
