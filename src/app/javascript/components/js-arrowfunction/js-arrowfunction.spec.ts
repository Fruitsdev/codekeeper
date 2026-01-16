import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsArrowfunction } from './js-arrowfunction';

describe('JsArrowfunction', () => {
  let component: JsArrowfunction;
  let fixture: ComponentFixture<JsArrowfunction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsArrowfunction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsArrowfunction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
