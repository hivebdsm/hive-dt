export const toTimestamp = (value: string | number): number | undefined => {
  if ((typeof value === 'string' && value === '') || (typeof value === 'number' && value < 0)) {
    return undefined;
  }

  let result = 0;

  if (typeof value === 'string') {
    const datetime = new Date(value);
    result = datetime.getTime();
  } else {
    result = Number(value);
  }

  return Math.floor(result / 1000);
};
