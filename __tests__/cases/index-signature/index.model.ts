export interface KeyedConfig {
  [name: string]: Section;
}

export interface Section {
  id: string;
  secret: string;
}
