import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsFunctions } from './js-functions';

describe('JsFunctions', () => {
  let component: JsFunctions;
  let fixture: ComponentFixture<JsFunctions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsFunctions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsFunctions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
