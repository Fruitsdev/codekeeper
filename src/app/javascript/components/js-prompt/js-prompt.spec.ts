import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPrompt } from './js-prompt';

describe('JsPrompt', () => {
  let component: JsPrompt;
  let fixture: ComponentFixture<JsPrompt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsPrompt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsPrompt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
