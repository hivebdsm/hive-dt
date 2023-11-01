/**
 * return 'DD.MM.YYYY'
 */
export const toDateString = (value: number): string | null => {
  const date = new Date(value);

  if (!(date instanceof Date && !isNaN(date.getTime()))) {
    return null;
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return Intl.DateTimeFormat('ru', options).format(date);
};

/**
 * return 'YYYY-MM-DD'
 */
export const toISODateString = (value: number): string | null => {
  const date = new Date(value);

  if (!(date instanceof Date && !isNaN(date.getTime()))) {
    return null;
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return Intl.DateTimeFormat('en-ca', options).format(date);
};

/**
 * return 'DD month YYYY'
 */
export const toDateLongString = (value: number): string | null => {
  const date = new Date(value);

  if (!(date instanceof Date && !isNaN(date.getTime()))) {
    return null;
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };

  return Intl.DateTimeFormat('ru', options).format(date);
};

/**
 * return 'YYYY-MM-DDThh:mm:ss' or 'YYYY-MM-DDThh:mm'
 */
export const toISOString = (value: number, withSeconds: boolean = true): string | null => {
  const date = new Date(value);

  if (!(date instanceof Date && !isNaN(date.getTime()))) {
    return null;
  }

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const formattedDate = new Intl.DateTimeFormat('en-ca', dateOptions).format(date);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h24',
  };

  if (!withSeconds) {
    delete timeOptions.second;
  }

  const formattedTime = new Intl.DateTimeFormat('en-ca', timeOptions).format(date);

  return `${formattedDate}T${formattedTime}`;
};

/**
 * return 'DD.MM.YYYY hh:mm:ss' or 'DD.MM.YYYY hh:mm'
 */
export const toDateTimeString = (value: number, withSeconds: boolean = true): string | null => {
  const date = new Date(value);

  if (!(date instanceof Date && !isNaN(date.getTime()))) {
    return null;
  }

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const formattedDate = new Intl.DateTimeFormat('ru', dateOptions).format(date);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h24',
  };

  if (!withSeconds) {
    delete timeOptions.second;
  }

  const formattedTime = new Intl.DateTimeFormat('ru', timeOptions).format(date);

  return `${formattedDate} ${formattedTime}`;
};

/**
 * return 'hh:mm:ss' or 'hh:mm'
 */
export const toTimeString = (value: number, withSeconds: boolean = true): string | null => {
  const date = new Date(value);

  if (!(date instanceof Date && !isNaN(date.getTime()))) {
    return null;
  }

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h24',
  };

  if (!withSeconds) {
    delete options.second;
  }

  return new Intl.DateTimeFormat('ru', options).format(date);
};
