export interface User {
  name: string;
  isActive?: boolean;
}

export interface CollectionBase {
  items?: unknown[];
}

export interface CollectionWithType<T> extends CollectionBase {
  items?: T[];
}

export interface DataWithOverrides {
  Users: CollectionWithType<User>;
}
