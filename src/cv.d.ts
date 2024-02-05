export interface CV {
  basics: Basics;
  work: Array<Work>;
  volunter: Array<Volunter>;
  education: Array<Education>;
  awards: Array<Awards>;
  certificates: Array<Certificates>;
  publications: Array<Publications>;
  skills: Array<Skills>;
  languages: Array<Languages>;
  interests: Array<Interests>;
  references: Array<References>;
  projects: Array<Projects>;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Array<Profile>;
}

interface Location {
  addres: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

interface Profile {
  network: string;
  username: string;
  url: string;
}

interface Work {
  title: string;
  items: {
    name: string;
    position: string;
    url: string;
    startDate: DateStr;
    endDate: DateStr | null;
    summary: string;
    highlights: Highlight;
  }[];
}

type DateStr = `${string}-${string}-${string}`;

interface Volunter {
  title: string;
  items: {
    organization: string;
    position: string;
    url: string;
    startDate: DateStr;
    endDate: DateStr;
    summary: string;
    highlights: Highlight;
  }[];
}

interface Skills {
  title: string;
  items: {
    name: string;
    level: string;
    keywords: Array<string>;
  }[];
}

interface Awards {
  title: string;
  items: {
    title: string;
    date: string;
    awarder: string;
    summary: string;
  }[];
}

interface Certificates {
  title: string;
  items: {
    name: string;
    date: DateStr;
    issuer: string;
    url: string;
  }[];
}

interface Publications {
  title: string;
  items: {
    name: string;
    publisher: string;
    releaseDate: DateStr;
    url: string;
    summary: string;
  }[];
}

interface Education {
  title: string;
  items: {
    institution: string;
    url: string;
    area: sring;
    studyType: string;
    startDate: DateStr;
    endDate: DateStr;
    score: string;
    courses: Array<string>;
  }[];
}

interface Languages {
  title: string;
  items: {
    language: Language;
    frequency: string;
  }[];
}

type Language =
  | "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string;

interface Projects {
  title: string;
  items: {
    name: string;
    isActive: boolean;
    description: string;
    highlights: Highlight;
    url: string;
    github?: string;
  }[];
}

interface Interests {
  title: string;
  items: {
    name: string;
    keywords: Array<stirng>;
  }[];
}

interface References {
  title: string;
  items: {
    name: string;
    reference: string;
  }[];
}

type Highlight = Array<String>;
