export interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isActive: boolean;
  location: {
    lat: number;
    lon: number;
  };
}
