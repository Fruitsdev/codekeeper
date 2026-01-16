import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTruthyfalsy } from './js-truthyfalsy';

describe('JsTruthyfalsy', () => {
  let component: JsTruthyfalsy;
  let fixture: ComponentFixture<JsTruthyfalsy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsTruthyfalsy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsTruthyfalsy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
