export interface Todo {
  id: number;
  content: string;
  complete: boolean;
}

export interface User {
  id: number;
  username: string;
}

export interface Error {
  code: number;
  name: string;
  description: string;
}

export interface AuthenticationStatus {
  success: boolean;
}
