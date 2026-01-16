import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsConditionals } from './js-conditionals';

describe('JsConditionals', () => {
  let component: JsConditionals;
  let fixture: ComponentFixture<JsConditionals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsConditionals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsConditionals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
