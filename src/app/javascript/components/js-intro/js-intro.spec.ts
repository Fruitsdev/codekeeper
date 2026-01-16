import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsIntro } from './js-intro';

describe('JsIntro', () => {
  let component: JsIntro;
  let fixture: ComponentFixture<JsIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
