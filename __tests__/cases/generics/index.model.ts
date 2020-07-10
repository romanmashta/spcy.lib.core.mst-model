export interface User {
  name: string;
  isActive?: boolean;
}

export interface ToDo {
  isDone: boolean;
  description: string;
}

export interface Collection<T, U> {
  items: T[];
  meta: U;
}

export interface Meta {
  count: number;
  time: number;
}

export interface Data {
  Users: Collection<User, string>;
  Tasks: Collection<ToDo, Meta>;
}
