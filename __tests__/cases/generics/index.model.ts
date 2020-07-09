export interface User {
  name: string;
  isActive?: boolean;
}

export interface ToDo {
  isDone: boolean;
  description: string;
}

export interface Collection<T> {
  items: T[];
  count: number;
}

export interface Data {
  Users: Collection<User>;
  Tasks: Collection<ToDo>;
}
