import { useState, useEffect } from 'react';
import { convert } from '../utils/conversionLogic';

export function useConversion(fromUnit: string, toUnit: string) {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  useEffect(() => {
    if (fromValue !== '') {
      const result = convert(parseFloat(fromValue), fromUnit, toUnit);
      setToValue(result.toFixed(4));
    }
  }, [fromValue, fromUnit, toUnit]);

  return { fromValue, setFromValue, toValue };
}

