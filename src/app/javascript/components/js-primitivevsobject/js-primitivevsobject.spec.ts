import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsPrimitivevsobject } from './js-primitivevsobject';

describe('JsPrimitivevsobject', () => {
  let component: JsPrimitivevsobject;
  let fixture: ComponentFixture<JsPrimitivevsobject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsPrimitivevsobject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsPrimitivevsobject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
