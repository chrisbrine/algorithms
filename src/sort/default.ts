export type DefaultType = any;

export function defaultCompare(a: DefaultType, b: DefaultType): number {
  if (a === b) return 0;
  switch (typeof a) {
    case 'number':
      return a - (b as number);
    case 'string':
      return a < (b as string) ? -1 : 1;
    case 'boolean':
      return a === (b as boolean) ? 0 : a ? 1 : -1;
    case 'object':
      return a === null ? 1 : b === null ? -1 : 0;
    default:
      return a < b ? -1 : 1;
  }
}