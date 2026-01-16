import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsConversioncoercion } from './js-conversioncoercion';

describe('JsConversioncoercion', () => {
  let component: JsConversioncoercion;
  let fixture: ComponentFixture<JsConversioncoercion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsConversioncoercion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsConversioncoercion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
