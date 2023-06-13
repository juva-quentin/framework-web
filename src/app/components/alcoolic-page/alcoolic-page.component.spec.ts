import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AlcoolicPageComponent } from './alcoolic-page.component'

describe('AlcoolicPageComponent', () => {
  let component: AlcoolicPageComponent
  let fixture: ComponentFixture<AlcoolicPageComponent>

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [AlcoolicPageComponent]
    })
    .compileComponents()

    fixture = TestBed.createComponent(AlcoolicPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
