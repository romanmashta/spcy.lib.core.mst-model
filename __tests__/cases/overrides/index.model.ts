export interface User {
  name: string;
  isActive?: boolean;
}

export interface CollectionBase {
  items?: unknown[];
}

export interface CollectionWithType<T> {
  items?: T[];
}

export interface DataWithOverrides {
  collections: {
    active: CollectionWithType<User>;
  };
}
