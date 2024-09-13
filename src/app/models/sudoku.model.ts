export type Difficulty = 'easy' | 'medium' | 'hard' | 'random';
export type Board = Array<Array<number>>;

export interface BoardResponse {
  board: Board;
}

export interface SudokuRequest {
  board: Board;
}

export interface SolveResponse {
  difficulty: Difficulty;
  solution: Board;
  status: 'solved' | 'broken' | 'unsolvable';
}

export interface ValidateResponse {
  status: 'solved' | 'broken';
}
