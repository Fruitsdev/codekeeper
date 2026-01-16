import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDatatypes } from './js-datatypes';

describe('JsDatatypes', () => {
  let component: JsDatatypes;
  let fixture: ComponentFixture<JsDatatypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsDatatypes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsDatatypes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
