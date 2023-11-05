export const padString = (
  input: string,
  desiredLength: number,
  padCharacter: string,
) => {
  if (input.length >= desiredLength) {
    return input;
  }
  return padCharacter.repeat(desiredLength - input.length) + input;
};

export const mixColors = (hex1: string, hex2: string, mix255: number) => {
  const r1 = parseInt(hex1.slice(1, 3), 16);
  const g1 = parseInt(hex1.slice(3, 5), 16);
  const b1 = parseInt(hex1.slice(5, 7), 16);
  const rgb1 = [r1, g1, b1];

  const r2 = parseInt(hex2.slice(1, 3), 16);
  const g2 = parseInt(hex2.slice(3, 5), 16);
  const b2 = parseInt(hex2.slice(5, 7), 16);
  const rgb2 = [r2, g2, b2];

  const hex1Mix = mix255;
  const hex2Mix = 255 - mix255;

  const adjustedRGB = rgb1.map((_, index) =>
    Math.floor((hex1Mix * rgb1[index] + hex2Mix * rgb2[index]) / 255),
  );

  const result = `#${adjustedRGB
    .map((component) => padString(component.toString(16), 2, '0'))
    .join('')}`;
  return result;
};

export const calculateHexWithoutTransparency = (
  hexWithTransparency: string,
  backgroundColor: string,
) => {
  const opacity =
    hexWithTransparency.length === 9
      ? parseInt(hexWithTransparency.slice(7, 9), 16)
      : 255;
  return mixColors(hexWithTransparency, backgroundColor, opacity);
};

export const isLight = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128;
};

export const isDark = (hex: string) => !isLight(hex);
