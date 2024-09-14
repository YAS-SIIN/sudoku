import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoardResponse, ValidateResponse, SolveResponse, Difficulty, Board } from '../models/sudoku.model';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {
  private apiUrl = 'https://sugoku.onrender.com';

  constructor(private http: HttpClient) { }

  /**
   * Generates a Sudoku board based on the specified difficulty.
   * 
   * @param difficulty The difficulty level of the Sudoku board to generate.
   * @returns An Observable that emits the generated Sudoku board.
   */
  generateSudoku(difficulty: Difficulty): Observable<BoardResponse> {
    return this.http.get<BoardResponse>(`${this.apiUrl}/board`, {
      params: { difficulty }
    });
  }
  
  /**
   * Validates the given Sudoku board.
   * 
   * @param board The Sudoku board to validate.
   * @returns An Observable that emits the validation result.
   */
  validateSudoku(board: Board): Observable<ValidateResponse> {
    const formData = new FormData();
    formData.append('board', JSON.stringify(board));
    return this.http.post<ValidateResponse>(`${this.apiUrl}/validate`, formData);
  }

  /**
   * Solves the given Sudoku board.
   * 
   * @param board The Sudoku board to solve.
   * @returns An Observable that emits the solution.
   */
  solveSudoku(board: Board): Observable<SolveResponse> {
    const formData = new FormData();
    formData.append('board', JSON.stringify(board));
    return this.http.post<SolveResponse>(`${this.apiUrl}/solve`, formData);
  }
}