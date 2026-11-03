import type { CertificationItem } from './types';

export const certifications: CertificationItem[] = [
  {
    id: 'efset-c1',
    name: 'EF SET English Certificate',
    issuer: 'EF Standard English Test',
    category: 'language',
    issuedAt: '2026-10-19',
    verificationUrl: 'https://cert.efset.org/en/9euwZ3',
    pdfUrl: 'https://certificates-eu-west-1.efset.org/v2/certificates/9euwZ3/pdf?locale=en',

    assessment: {
      score: '62/100',
      level: 'C1 Advanced',
      breakdown: [
        {
          name: { es: 'Lectura', en: 'Reading' },
          score: '78/100',
          level: 'C2 Proficient',
        },
        {
          name: { es: 'Comprensión auditiva', en: 'Listening' },
          score: '63/100',
          level: 'C1 Advanced',
        },
        {
          name: { es: 'Escritura', en: 'Writing' },
          score: '53/100',
          level: 'B2 Upper Intermediate',
        },
        {
          name: { es: 'Expresión oral', en: 'Speaking' },
          score: '55/100',
          level: 'B2 Upper Intermediate',
        },
      ],
    },
  },
];
