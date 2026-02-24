import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// phone formatting function for Malaysian mobile numbers
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;

  // Handle 011 prefix (11 digits: 011-xxxx xxxx)
  if (phoneNumber.startsWith('011')) {
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 8) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)} ${phoneNumber.slice(7, 11)}`;
  }

  // Handle other mobile prefixes 01x (10 digits: 01x-xxx xxxx)
  if (phoneNumber.startsWith('01')) {
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 10)}`;
  }

  return phoneNumber;
};

export const getNext5Days = () => {
  const dates = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  for (let i = 0; i < 5; i++) {
    const date = new Date(tomorrow);
    date.setDate(date.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }

  return dates;
};

export const getAvailableTimeSlots = () => {
  return [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
  ];
};

export const APPOINTMENT_TYPES = [
  {
    id: 'checkup',
    name: 'Regular Checkup',
    duration: '60 min',
    price: 'RM 120',
  },
  {
    id: 'cleaning',
    name: 'Teeth Cleaning',
    duration: '45 min',
    price: 'RM 90',
  },
  {
    id: 'consultation',
    name: 'Consultation',
    duration: '30 min',
    price: 'RM 75',
  },
  {
    id: 'emergency',
    name: 'Emergency Visit',
    duration: '30 min',
    price: 'RM 150',
  },
];
