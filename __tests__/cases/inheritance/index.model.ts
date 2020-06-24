export interface Entity {
  id: string;
}

export interface Audit {
  createdOn: string;
  updatedOn: string;
}

export interface PersonEntity extends Audit, Entity {
  firstName: string;
  lastName: string;
  age?: number;
  isActive?: boolean;
}
