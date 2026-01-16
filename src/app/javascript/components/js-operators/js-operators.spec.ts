import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsOperators } from './js-operators';

describe('JsOperators', () => {
  let component: JsOperators;
  let fixture: ComponentFixture<JsOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsOperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsOperators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
