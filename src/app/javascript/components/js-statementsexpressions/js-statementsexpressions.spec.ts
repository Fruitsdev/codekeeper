import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsStatementsexpressions } from './js-statementsexpressions';

describe('JsStatementsexpressions', () => {
  let component: JsStatementsexpressions;
  let fixture: ComponentFixture<JsStatementsexpressions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsStatementsexpressions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsStatementsexpressions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
