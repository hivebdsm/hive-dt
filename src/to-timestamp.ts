const convertDateTime = (datetime: string, separator: string): number | undefined => {
  if (datetime.includes(separator)) {
    const [date, time] = datetime.split(separator);
    const timeParts = time?.split(':');
    const dateParts = date.includes('-') ? date?.split('-') : date?.split('.');

    let year = 0;
    let day = 0;

    if (Number(dateParts[0]) > 31) {
      year = Number(dateParts[0]);
      day = Number(dateParts[2]);
    } else {
      year = Number(dateParts[2]);
      day = Number(dateParts[0]);
    }

    if (timeParts && dateParts && year && day) {
      return new Date(
        year,
        Number(dateParts[1]) - 1,
        day,
        Number(timeParts[0]),
        Number(timeParts[1]),
        Number(timeParts[2]) || 0,
      ).getTime();
    }
  }

  return undefined;
};

export const toTimestamp = (value: string, deleteMS = false): number | null => {
  if (value === '') {
    return null;
  }

  let result: number | undefined;

  if (value.includes(' ')) {
    result = convertDateTime(value, ' ');
  } else if (value.includes('T')) {
    result = convertDateTime(value, 'T');
  } else if (value.includes('.')) {
    const dateParts = value.split('.');
    result = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0])).getTime();
  } else if (value.includes('-')) {
    const dateParts = value.split('-');
    result = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[1])).getTime();
  } else if (value.includes(':')) {
    const timeParts = value.split(':');
    const date = new Date();

    result = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      Number(timeParts[0]),
      Number(timeParts[1]),
      Number(timeParts[2]) || 0,
    ).getTime();
  }

  if (!result || Number.isNaN(result) || result < 0) {
    return null;
  }

  return deleteMS ? Math.floor(result / 1000) : result;
};
