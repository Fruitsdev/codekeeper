import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsComments } from './js-comments';

describe('JsComments', () => {
  let component: JsComments;
  let fixture: ComponentFixture<JsComments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsComments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsComments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
