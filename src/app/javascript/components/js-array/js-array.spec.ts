import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsArray } from './js-array';

describe('JsArray', () => {
  let component: JsArray;
  let fixture: ComponentFixture<JsArray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsArray]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsArray);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
