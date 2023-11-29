import moment from 'moment';

export const toDateString = (value: number): string => {
  const dt = moment(value);
  return dt.format('DD.MM.YYYY');
};

export const toISODateString = (value: number): string => {
  const dt = moment(value);
  return dt.format('YYYY-MM-DD');
};

export const toISOString = (value: number): string => {
  const dt = moment(value);
  return dt.format('YYYY-MM-DDTHH:mm:ss');
};

export const toTimeString = (value: number, withSeconds: boolean = true): string => {
  const dt = moment(value);

  if (withSeconds) return dt.format('HH:mm:ss');
  return dt.format('HH:mm')
};

export const toDateTimeString = (value: number, withSeconds: boolean = true): string => {
   return `${toDateString(value)} ${toTimeString(value, withSeconds)}`;
};
