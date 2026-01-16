import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsSwitch } from './js-switch';

describe('JsSwitch', () => {
  let component: JsSwitch;
  let fixture: ComponentFixture<JsSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
