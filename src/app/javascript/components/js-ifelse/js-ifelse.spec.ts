import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsIfelse } from './js-ifelse';

describe('JsIfelse', () => {
  let component: JsIfelse;
  let fixture: ComponentFixture<JsIfelse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsIfelse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsIfelse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
