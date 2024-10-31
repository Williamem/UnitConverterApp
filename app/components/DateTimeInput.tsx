import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CalendarIcon } from 'react-native-heroicons/outline';

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
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const resetToNow = () => {
    const now = new Date();
    onDateChange(now);
    setDateInput(formatDateForLocale(now, locale));
    setTimeInput(formatTimeForLocale(now, locale));
    setDateError('');
    setTimeError('');
  };

  const handleDateChange = (text: string) => {
    if (text === '') {
      setDateInput('');
      return;
    }

    // Allow dashes only in correct positions (after year and month)
    let formattedText = text;
    
    // Remove any dashes that aren't in the correct position
    formattedText = formattedText.replace(/-/g, (match, offset) => {
      return (offset === 4 || offset === 7) ? '-' : '';
    });

    // Remove any non-numeric characters except properly positioned dashes
    formattedText = formattedText.replace(/[^\d-]/g, '');

    // Add dashes if numbers are typed and no dash exists
    if (formattedText.length > 4 && formattedText.charAt(4) !== '-') {
      formattedText = formattedText.slice(0, 4) + '-' + formattedText.slice(4);
    }
    if (formattedText.length > 7 && formattedText.charAt(7) !== '-') {
      formattedText = formattedText.slice(0, 7) + '-' + formattedText.slice(7);
    }

    // Ensure we don't exceed max length
    formattedText = formattedText.slice(0, 10);
    
    setDateInput(formattedText);

    // Only try to parse if we have a complete date
    const numbers = formattedText.replace(/-/g, '');
    if (numbers.length === 8) {
      const [year, month, day] = formattedText.split('-');
      
      try {
        const newDate = new Date(date);
        if (parseInt(year) >= 1000 && 
            parseInt(month) >= 1 && parseInt(month) <= 12 && 
            parseInt(day) >= 1 && parseInt(day) <= 31) {
          newDate.setFullYear(parseInt(year));
          newDate.setMonth(parseInt(month) - 1);
          newDate.setDate(parseInt(day));
          
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
    if (text === '') {
      setTimeInput('');
      return;
    }

    // Allow colon only in correct position (between hours and minutes)
    let formattedText = text;
    
    // Remove any colons that aren't in the correct position
    formattedText = formattedText.replace(/:/g, (match, offset) => {
      return offset === 2 ? ':' : '';
    });

    // Remove any non-numeric characters except properly positioned colons
    formattedText = formattedText.replace(/[^\d:]/g, '');

    // Add colons if numbers are typed and no colon exists
    if (formattedText.length > 2 && formattedText.charAt(2) !== ':') {
      formattedText = formattedText.slice(0, 2) + ':' + formattedText.slice(2);
    }

    // Ensure we don't exceed max length
    formattedText = formattedText.slice(0, 5);
    
    setTimeInput(formattedText);

    // Only try to parse if we have complete time
    const numbers = formattedText.replace(/:/g, '');
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

  const handleDatePickerChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const newDate = new Date(date);
      newDate.setFullYear(selectedDate.getFullYear());
      newDate.setMonth(selectedDate.getMonth());
      newDate.setDate(selectedDate.getDate());
      onDateChange(newDate);
      setDateInput(formatDateForLocale(newDate, locale));
      setDateError('');
    }
  };

  return (
    <View className="px-4 pt-3 pb-4 bg-background-secondary rounded-lg mb-4">
      <View className="flex-row items-center gap-2">
        <Text className="text-text-primary">From:</Text>
        <View className="flex-1 relative">
          <View className="flex-row">
            <TextInput
              className={`flex-1 border ${dateError ? 'border-red-500' : 'border-border-primary'} rounded-md px-3 py-2 bg-background-primary text-text-primary h-10`}
              value={dateInput}
              onChangeText={handleDateChange}
              placeholder={getDatePlaceholder()}
              placeholderTextColor="#666"
            />
            <TouchableOpacity 
              className="absolute right-2 top-2"
              onPress={() => setShowDatePicker(true)}
            >
              <CalendarIcon color="#666" size={24} />
            </TouchableOpacity>
          </View>
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

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDatePickerChange}
        />
      )}
    </View>
  );
};
