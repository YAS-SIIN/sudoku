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
    const formData = new FormData();
    formData.append('board', JSON.stringify(board));
    return this.http.post<ValidateResponse>(`${this.apiUrl}/validate`, formData);
  }

  solveSudoku(board: Board): Observable<SolveResponse> {
    const formData = new FormData();
    formData.append('board', JSON.stringify(board));
    return this.http.post<SolveResponse>(`${this.apiUrl}/solve`, formData);
  }
}