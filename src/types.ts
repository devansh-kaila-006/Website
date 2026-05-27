export interface Metric {
  id: string;
  label: string;
  value: string;
  description: string;
  icon?: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  iconName: string;
  shortDescription: string;
  longDescription: string;
  components: {
    title: string;
    description: string;
  }[];
  problemsSolved: string[];
  outcomes: {
    metric: string;
    label: string;
  }[];
  relatedServices: string[];
}

export interface ApproachStage {
  id: string;
  number: number;
  title: string;
  iconName: string;
  oneLiner: string;
  description: string;
  details: string[];
  output: string;
  metric?: string;
}

export interface IndustryDetail {
  id: string;
  name: string;
  iconName: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  metrics: {
    value: string;
    description: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  industry: string;
  serviceId: string;
  challenge: string;
  solution: string;
  results: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  serviceReceived: string;
  resultsAchieved: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phoneNumber?: string;
  company: string;
  industry: string;
  serviceOfInterest: string;
  message: string;
  preferredContact: 'email' | 'phone';
}

export interface LeaderProfile {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  location: string;
  photoUrl: string;
  tagline: string;
  bioParagraphs: string[];
  coreExpertise: string[];
  credentials: string[];
  industriesServed: { name: string; years: number }[];
  notableAchievements: string[];
  education: string[];
  beyondWork?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
}

