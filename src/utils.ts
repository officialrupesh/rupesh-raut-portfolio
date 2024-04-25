export const scaleValue = (value: number, width: number = 1440) => {
  const scaleOutput = `calc(${value} * (clamp(390px, 100vw , 1440px) / ${width}))`;
  return scaleOutput;
};
export const scaleFont = (value: number, width: number = 1440) => {
  const scaleOutput = `  calc(max(12px, min(25 * (clamp(390px, 100vw, 1440px) / ${width}), ${value}px)))`
  // calc(${value} * (clamp(390px, 100vw , 1440px) / ${width}) + 12px )`;

  return scaleOutput;
};
