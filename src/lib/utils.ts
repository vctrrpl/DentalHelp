import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatar(name: string, gender: 'MALE' | 'FEMALE') {
  const username = name.replace(/\s+/g, '').toLowerCase();
  const base = 'https://avatar.iran.liara.run/public';
  if (gender === 'FEMALE') return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
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
