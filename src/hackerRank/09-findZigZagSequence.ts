const findZigZazSequence = (a: number[]): number[] => {
  const k = (a.length - 1) / 2;
  const max = Math.max(...a);
  return [k, max];
};

export { findZigZazSequence };
