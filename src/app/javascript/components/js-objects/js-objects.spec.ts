import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsObjects } from './js-objects';

describe('JsObjects', () => {
  let component: JsObjects;
  let fixture: ComponentFixture<JsObjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsObjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsObjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
