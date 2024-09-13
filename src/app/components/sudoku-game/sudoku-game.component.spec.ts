import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuGameComponent } from './sudoku-game.component';

describe('SudokuGameComponent', () => {
  let component: SudokuGameComponent;
  let fixture: ComponentFixture<SudokuGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SudokuGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
