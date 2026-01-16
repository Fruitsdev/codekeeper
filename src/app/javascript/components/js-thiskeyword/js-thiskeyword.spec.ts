import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsThiskeyword } from './js-thiskeyword';

describe('JsThiskeyword', () => {
  let component: JsThiskeyword;
  let fixture: ComponentFixture<JsThiskeyword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsThiskeyword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsThiskeyword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
