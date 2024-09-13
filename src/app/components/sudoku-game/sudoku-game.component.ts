import { Component, inject } from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';
import { take } from 'rxjs';
import { Board, BoardResponse, Difficulty, SolveResponse } from '../../models/sudoku.model';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ValidSudokuNumberDirective } from '../../directives/valid-sudoku-number.directive';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-sudoku-game',
  standalone: true,
  imports: [CommonModule, FormsModule, ValidSudokuNumberDirective,NgxSkeletonLoaderModule],
  templateUrl: './sudoku-game.component.html',
  styleUrls: ['./sudoku-game.component.scss']
})
export class SudokuGameComponent {
  private sudokuService: SudokuService = inject(SudokuService);
  private toastrService: ToastrService = inject(ToastrService);
 


  ngOnInit() {
    this.onloadData();
  }

  onloadData() {
    this.generateSudoku('easy');
  }

  board: Board = [];
  selectedDifficulty: Difficulty = 'easy';
  generateSudoku(difficulty: Difficulty): void {
    this.sudokuService.generateSudoku(difficulty).pipe(take(1)).subscribe(
      (response: BoardResponse) => {
        this.board = response.board;
      },
      (error: any) => {
        this.toastrService.error('Error generating Sudoku', 'Error');
      }
    );
  }


  validateSudoku() {
    this.sudokuService.validateSudoku(this.board).pipe(take(1)).subscribe(
      (response) => {
        if (response.status === 'solved') {
          this.toastrService.success('Sudoku is valid and solved!', 'Success');
        } else if (response.status === 'broken') {
          this.toastrService.info('Sudoku is valid but not yet solved.', 'Info');
        } else {
          this.toastrService.warning('Sudoku is invalid.', 'Warning');
        }
      },
      (error) => {
        this.toastrService.error('Error validating Sudoku', 'Error');
      }
    );
  }

  solveSudoku() {
    this.sudokuService.solveSudoku(this.board).pipe(take(1)).subscribe(
      (response: SolveResponse) => {
        if (response.status === 'solved') {
          this.board = response.solution;
          this.toastrService.success('Sudoku solved successfully!', 'Success');
        } else if (response.status === 'broken') {
          this.toastrService.warning('Sudoku is invalid or unsolvable.', 'Warning');
        } else {
          this.toastrService.error('Unable to solve Sudoku.', 'Error');
        }
      },
      (error) => {
        this.toastrService.error('Error solving Sudoku', 'Error');
      }
    );
  }

}
