import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsVariables } from './js-variables';

describe('JsVariables', () => {
  let component: JsVariables;
  let fixture: ComponentFixture<JsVariables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsVariables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsVariables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
