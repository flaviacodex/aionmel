export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SpecConcept {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface BatchProfile {
  code: string;
  harvestDate: string;
  region: string;
  floradaType: string;
  humidity: string;
  density: string;
  colorHex: string;
  colorName: string;
  limitedUnits: number;
  remainingUnits: number;
  botanicalNotes: string[];
}
