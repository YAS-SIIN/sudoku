import { Component, inject } from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';
import { take } from 'rxjs';
import { Board, BoardResponse, Difficulty } from '../../models/sudoku.model';

@Component({
  selector: 'app-sudoku-game',
  standalone: true,
  imports: [],
  templateUrl: './sudoku-game.component.html',
  styleUrl: './sudoku-game.component.scss'
})
export class SudokuGameComponent {
  private sudokuService: SudokuService = inject(SudokuService);


  ngOnInit() {
    this.onloadData();
  }
  
  onloadData() {
    this.generateSudoku('easy');
  }

  board: Board = [];
  generateSudoku(difficulty: Difficulty): void {
    this.sudokuService.generateSudoku(difficulty).pipe(take(1)).subscribe(
      (response: BoardResponse) => {
        this.board = response.board;
      },
      (error: any) => {
        console.error('Error generating Sudoku:', error);
      }
    );
  }
}

