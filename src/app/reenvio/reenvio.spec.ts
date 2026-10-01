import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reenvio } from './reenvio';

describe('Reenvio', () => {
  let component: Reenvio;
  let fixture: ComponentFixture<Reenvio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reenvio],
    }).compileComponents();

    fixture = TestBed.createComponent(Reenvio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
