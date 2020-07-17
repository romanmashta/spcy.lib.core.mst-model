export interface ToDo {
  isDone: boolean;
  description?: string;
}

export interface RootStorage {
  todos: ToDo[];
}
