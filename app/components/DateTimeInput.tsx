import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const formatDateForLocale = (date: Date, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
};

const formatTimeForLocale = (date: Date, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: Intl.DateTimeFormat(locale, { hour: 'numeric' }).resolvedOptions().hour12
  }).format(date);
};

interface DateTimeInputProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

export const DateTimeInput: React.FC<DateTimeInputProps> = ({ date, onDateChange }) => {
  const locale = Intl.DateTimeFormat().resolvedOptions().locale;
  const [dateInput, setDateInput] = useState(() => formatDateForLocale(date, locale));
  const [timeInput, setTimeInput] = useState(() => formatTimeForLocale(date, locale));
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  
  const resetToNow = () => {
    const now = new Date();
    onDateChange(now);
    setDateInput(formatDateForLocale(now, locale));
    setTimeInput(formatTimeForLocale(now, locale));
    setDateError('');
    setTimeError('');
  };

  const handleDateChange = (text: string) => {
    // If user is trying to clear the input, allow it
    if (text === '') {
      setDateInput('');
      return;
    }

    // Remove any non-numeric characters from input
    const numbers = text.replace(/\D/g, '');
    
    // Keep track of cursor position relative to dashes
    let formattedText = '';
    
    // Format the numbers with dashes
    if (numbers.length <= 4) {
      formattedText = numbers;
    } else if (numbers.length <= 6) {
      formattedText = `${numbers.slice(0, 4)}-${numbers.slice(4)}`;
    } else {
      formattedText = `${numbers.slice(0, 4)}-${numbers.slice(4, 6)}-${numbers.slice(6, 8)}`;
    }
    
    setDateInput(formattedText);

    // Only try to parse if we have a complete date
    if (numbers.length === 8) {
      const year = numbers.slice(0, 4);
      const month = numbers.slice(4, 6);
      const day = numbers.slice(6, 8);
      
      try {
        const newDate = new Date(date);
        // Validate each part individually
        if (parseInt(year) >= 1000 && 
            parseInt(month) >= 1 && parseInt(month) <= 12 && 
            parseInt(day) >= 1 && parseInt(day) <= 31) {
          newDate.setFullYear(parseInt(year));
          newDate.setMonth(parseInt(month) - 1);
          newDate.setDate(parseInt(day));
          
          // Check if the date is valid (handles cases like Feb 31)
          if (!isNaN(newDate.getTime()) && 
              newDate.getFullYear() === parseInt(year) && 
              newDate.getMonth() === parseInt(month) - 1 && 
              newDate.getDate() === parseInt(day)) {
            onDateChange(newDate);
            setDateError('');
          } else {
            setDateError('Invalid date');
          }
        } else {
          setDateError('Invalid date');
        }
      } catch (e) {
        setDateError('Invalid date');
      }
    }
  };

  const handleTimeChange = (text: string) => {
    // Remove any non-numeric characters
    const numbers = text.replace(/\D/g, '');
    
    // Format with colon
    let formattedText = numbers;
    if (numbers.length > 2) {
      formattedText = `${numbers.slice(0, 2)}:${numbers.slice(2, 4)}`;
    }
    
    setTimeInput(formattedText);

    // Only try to parse if we have complete time
    if (numbers.length === 4) {
      const hours = parseInt(numbers.slice(0, 2));
      const minutes = parseInt(numbers.slice(2, 4));
      
      if (hours < 24 && minutes < 60) {
        const newDate = new Date(date);
        newDate.setHours(hours);
        newDate.setMinutes(minutes);
        onDateChange(newDate);
        setTimeError('');
      } else {
        setTimeError('Invalid time');
      }
    }
  };

  const getDatePlaceholder = () => {
    const format = new Intl.DateTimeFormat(locale).format(new Date('2024-02-15'));
    return format.replace(/2024/g, 'YYYY')
                .replace(/02/g, 'MM')
                .replace(/15/g, 'DD');
  };

  const getTimePlaceholder = () => {
    const is24Hour = !Intl.DateTimeFormat(locale, { hour: 'numeric' }).resolvedOptions().hour12;
    return is24Hour ? 'HH:mm' : 'hh:mm AM/PM';
  };

  return (
    <View className="px-4 pt-3 pb-4 bg-background-secondary rounded-lg mb-4">
      <View className="flex-row items-center gap-2">
        <Text className="text-text-primary">From:</Text>
        <View className="flex-1 relative">
          <TextInput
            className={`border ${dateError ? 'border-red-500' : 'border-border-primary'} rounded-md px-3 py-2 bg-background-primary text-text-primary h-10`}
            value={dateInput}
            onChangeText={handleDateChange}
            placeholder={getDatePlaceholder()}
            placeholderTextColor="#666"
          />
          {dateError && (
            <Text className="absolute -bottom-4 left-0 text-red-500 text-xs">
              {dateError}
            </Text>
          )}
        </View>
        <View className="w-32 relative">
          <TextInput
            className={`border ${timeError ? 'border-red-500' : 'border-border-primary'} rounded-md px-3 py-2 bg-background-primary text-text-primary h-10`}
            value={timeInput}
            onChangeText={handleTimeChange}
            placeholder={getTimePlaceholder()}
            placeholderTextColor="#666"
          />
          {timeError && (
            <Text className="absolute -bottom-4 left-0 text-red-500 text-xs">
              {timeError}
            </Text>
          )}
        </View>
        <TouchableOpacity 
          className="bg-accent-primary px-4 py-2 rounded-md h-10 bg-blue-500 justify-center"
          onPress={resetToNow}
        >
          <Text className="text-white font-medium">Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
