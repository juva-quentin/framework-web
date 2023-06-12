import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AlcoolSearchComponent } from './alcool-search.component'

describe('AlcoolSearchComponent', () => {
  let component: AlcoolSearchComponent
  let fixture: ComponentFixture<AlcoolSearchComponent>

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [AlcoolSearchComponent]
    })
    .compileComponents()

    fixture = TestBed.createComponent(AlcoolSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
