import type { EducationItem } from './types';

export const education: EducationItem[] = [
  {
    id: 'diplomado-seguridad',
    institution: 'Corporación Universitaria Remington',
    url: 'https://www.uniremington.edu.co/cucuta/',
    studyType: {
      es: 'Diplomado',
      en: 'Postgraduate Diploma',
    },
    area: {
      es: 'Seguridad Informática y de Sistemas',
      en: 'Information & Systems Security',
    },
    startDate: '2019-02-01',
    endDate: '2019-05-01',
    score: '4.0 / 5.0',
  },
  {
    id: 'ingenieria-sistemas',
    institution: 'Corporación Universitaria Remington',
    url: 'https://www.uniremington.edu.co/cucuta/',
    studyType: {
      es: 'Profesional Universitario',
      en: 'Bachelor of Science (B.S.)',
    },
    area: {
      es: 'Ingeniero de Sistemas',
      en: 'Systems Engineering',
    },
    startDate: '2014-08-01',
    endDate: '2019-05-01',
    score: '4.0 / 5.0',
  },
];
