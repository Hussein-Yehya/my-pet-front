export const handleValidationEmail = (value: string): boolean =>
  value.includes('@') ? false : true;
