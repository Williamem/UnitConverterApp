export interface UnitInfo {
  names: string[];          // Primary name and alternative names
  abbreviations: string[];  // Common abbreviations
  description: string;      // Short informational text
  needsAsterisk?: boolean;  // Flag for units that need special attention
  asteriskReason?: string;  // Explanation for the asterisk
}

export interface CategoryDefinition {
  baseUnit: string;
  categories: {
    [key: string]: string[];  // e.g., metric: ['meter', 'kilometer']
  };
  units: {
    [key: string]: UnitInfo;
  };
  conversions: {
    [key: string]: number;
  };
}

