export type MakeObjectTypeOptional<T> = {
  [K in keyof T]?: T[K];
};
