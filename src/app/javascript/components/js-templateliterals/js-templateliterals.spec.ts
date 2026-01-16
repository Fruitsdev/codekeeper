import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTemplateliterals } from './js-templateliterals';

describe('JsTemplateliterals', () => {
  let component: JsTemplateliterals;
  let fixture: ComponentFixture<JsTemplateliterals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsTemplateliterals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsTemplateliterals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
