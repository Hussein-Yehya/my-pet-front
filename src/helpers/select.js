import { Select } from 'semantic-ui-react';

export const options = [
    { value: 'SMALL', label: 'Pequeno' },
    { value: 'MEDIUM', label: 'Médio' },
    { value: 'LARGE', label: 'Grande' },
    { value: 'XL', label: 'Grandão' }
  ];
  
  export const coatLengthOptions = [
    { value: 'HAIRLESS', label: 'Sem pelagem' },
    { value: 'SHORT', label: 'Pequeno' },
    { value: 'MEDIUM', label: 'Médio' },
    { value: 'LONG', label: 'Longo' }
  ];
  
  export const petRecommendedToOptions = [
    { value: 'KIDS', label: 'Crianças' },
    { value: 'OLD_MAN', label: 'Idosos' },
    { value: 'DEFICIENT', label: 'Pessoas Especiais' }
  ];
  
  export const petTypeOptions = [
    { value: 'CAT', label: 'Felino' },
    { value: 'DOG', label: 'Canino' }
  ];
  
  export const genreOptions = [
    { value: 'M', label: 'Macho' },
    { value: 'F', label: 'Fêmea' }
  ];

  export default Select;