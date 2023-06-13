import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ListAlcoolComponent } from './list-alcool.component'

describe('ListAlcoolComponent', () => {
  let component: ListAlcoolComponent
  let fixture: ComponentFixture<ListAlcoolComponent>

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ListAlcoolComponent]
    })
    .compileComponents()

    fixture = TestBed.createComponent(ListAlcoolComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
