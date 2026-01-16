import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsWhatisjs } from './js-whatisjs';

describe('JsWhatisjs', () => {
  let component: JsWhatisjs;
  let fixture: ComponentFixture<JsWhatisjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsWhatisjs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsWhatisjs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
