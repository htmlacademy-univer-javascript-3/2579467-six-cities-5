export const formatDateShort = (date: Date) => date.toISOString().split('T')[0];

export const formatDateLong = (date: Date) => date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
