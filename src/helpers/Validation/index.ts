import { handleValidationName } from './name';
import { handleValidationDefault } from './default';
import { handleValidationEmail } from './email';
export const handleValidation = (field: string, value: string): boolean => {
  switch (field) {
    case 'name':
      return handleValidationName(value);

    case 'email':
      return handleValidationEmail(value);

    default:
      return handleValidationDefault(value);
  }
};
