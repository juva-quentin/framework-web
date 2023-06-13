import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AlcoolCardComponent } from './alcool-card.component'

describe('AlcoolCardComponent', () => {
  let component: AlcoolCardComponent
  let fixture: ComponentFixture<AlcoolCardComponent>

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [AlcoolCardComponent]
    })
    .compileComponents()

    fixture = TestBed.createComponent(AlcoolCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
