import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Barrabusca } from './barrabusca';

describe('Barrabusca', () => {
  let component: Barrabusca;
  let fixture: ComponentFixture<Barrabusca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Barrabusca],
    }).compileComponents();

    fixture = TestBed.createComponent(Barrabusca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
