import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NoAlcoolicPageComponent } from './no-alcoolic-page.component'

describe('NoAlcoolicPageComponent', () => {
  let component: NoAlcoolicPageComponent
  let fixture: ComponentFixture<NoAlcoolicPageComponent>

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [NoAlcoolicPageComponent]
    })
    .compileComponents()

    fixture = TestBed.createComponent(NoAlcoolicPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
