import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuBoardComponent } from './sudoku-board.component';

describe('SudokuBoardComponent', () => {
  let component: SudokuBoardComponent;
  let fixture: ComponentFixture<SudokuBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SudokuBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
