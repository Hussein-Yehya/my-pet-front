export const handleValidationName = (value: string): boolean =>
  value.length < 2 ? false : true;
