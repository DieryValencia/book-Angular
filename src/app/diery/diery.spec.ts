import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diery } from './diery';

describe('Diery', () => {
  let component: Diery;
  let fixture: ComponentFixture<Diery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diery],
    }).compileComponents();

    fixture = TestBed.createComponent(Diery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
