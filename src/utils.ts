export const scaleValue = (value: number, width: number = 1440) => {
  const scaleOutput = `calc(${value} * (clamp(390px, 100vw , 1440px) / ${width}))`;
  return scaleOutput;
};
