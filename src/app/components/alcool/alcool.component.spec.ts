import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AlcoolComponent } from './alcool.component'

describe('AlcoolComponent', () => {
  let component: AlcoolComponent
  let fixture: ComponentFixture<AlcoolComponent>

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [AlcoolComponent]
    })
    .compileComponents()

    fixture = TestBed.createComponent(AlcoolComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
