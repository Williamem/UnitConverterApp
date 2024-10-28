export const getUniqueUnits = (categories: string[], categoryData: Record<string, string[]>): string[] => {
  if (categories.includes('all')) {
    // Return all unique units from all categories
    return Array.from(new Set(
      Object.values(categoryData).flat()
    ));
  }
  
  // Return unique units from selected categories
  return Array.from(new Set(
    categories.flatMap(category => categoryData[category] || [])
  ));
};

