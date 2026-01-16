import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsEqualityoperator } from './js-equalityoperator';

describe('JsEqualityoperator', () => {
  let component: JsEqualityoperator;
  let fixture: ComponentFixture<JsEqualityoperator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsEqualityoperator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsEqualityoperator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
