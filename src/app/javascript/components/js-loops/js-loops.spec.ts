import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsLoops } from './js-loops';

describe('JsLoops', () => {
  let component: JsLoops;
  let fixture: ComponentFixture<JsLoops>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsLoops]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsLoops);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
