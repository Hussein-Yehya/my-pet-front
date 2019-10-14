import { SelectInterface } from '../Interfaces/Select/index.interface';

export const options: SelectInterface[] = [
  { value: 'SMALL', label: 'Pequeno 6kg - 15kg' },
  { value: 'MEDIUM', label: 'Médio 15kg - 25kg' },
  { value: 'LARGE', label: 'Grande 25kg -45kg' },
  { value: 'XL', label: 'Gigante 45kg - 90kg' }
];

export const coatLengthOptions: SelectInterface[] = [
  { value: 'HAIRLESS', label: 'Sem pelagem' },
  { value: 'SHORT', label: 'Pequeno' },
  { value: 'MEDIUM', label: 'Médio' },
  { value: 'LONG', label: 'Longo' }
];

export const petRecommendedToOptions: SelectInterface[] = [
  { value: 'KIDS', label: 'Crianças' },
  { value: 'OLD_MAN', label: 'Idosos' },
  { value: 'DEFICIENT', label: 'Pessoas Especiais' },
  { value: 'ALL', label: 'Todos' }
];

export const petTypeOptions: SelectInterface[] = [
  { value: 'CAT', label: 'Gato' },
  { value: 'DOG', label: 'Cachorro' }
];

export const genreOptions: SelectInterface[] = [
  { value: 'M', label: 'Macho' },
  { value: 'F', label: 'Fêmea' }
];
