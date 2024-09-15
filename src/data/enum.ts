export type EnumDictionary<T extends string, U> = {
  [key in T]: U;
}