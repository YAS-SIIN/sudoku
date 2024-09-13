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

  generateSudoku(difficulty: Difficulty): Observable<BoardResponse> {
    return this.http.get<BoardResponse>(`${this.apiUrl}/board`, {
      params: { difficulty }
    });
  }

  validateSudoku(board: Board): Observable<ValidateResponse> {
    return this.http.post<ValidateResponse>(`${this.apiUrl}/validate`, { board });
  }

  solveSudoku(board: Board): Observable<SolveResponse> {
    return this.http.post<SolveResponse>(`${this.apiUrl}/solve`, { board });
  }
}
