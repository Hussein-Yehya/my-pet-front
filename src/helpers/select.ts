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

export const statesOptions: SelectInterface[] = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' }
];
