import { calculateHexWithoutTransparency, isLight, mixColors } from './colors';

describe('colors', () => {
  describe('mixColors', () => {
    it('should return hex1 when mix is 255', () => {
      const hex1 = '#ff0298';
      const hex2 = '#0298ff';
      const result = mixColors(hex1, hex2, 255);
      expect(result).toBe(hex1);
    });

    it('should return hex2 when mix is 0', () => {
      const hex1 = '#ff0298';
      const hex2 = '#0298ff';
      const result = mixColors(hex1, hex2, 0);
      expect(result).toBe(hex2);
    });

    it('should return mixture of colours when mix is 127', () => {
      const hex1 = '#ff0298';
      const hex2 = '#0298ff';
      const result = mixColors(hex1, hex2, 127);
      expect(result).toBe('#804dcb');
    });
  });

  describe('calculateHexWithoutTransparency', () => {
    it('should return input hex when opacity is missing', () => {
      const color = '#ff0298';
      const background = '#ffffff';
      const result = calculateHexWithoutTransparency(color, background);
      expect(result).toBe(color);
    });

    it('should return input hex when opacity is 255', () => {
      const color = '#ff0298';
      const background = '#ffffff';
      const result = calculateHexWithoutTransparency(`${color}FF`, background);

      expect(result).toBe(color);
    });

    it('should return background hex when opacity is 0', () => {
      const color = '#ff029800';
      const background = '#ffffff';
      const result = calculateHexWithoutTransparency(color, background);
      expect(result).toBe(`#ffffff`);
    });

    it('should return mixture of white background and foreground when opacity is 127', () => {
      const color = '#ff02987F';
      const background = '#ffffff';
      const result = calculateHexWithoutTransparency(color, background);
      expect(result).toBe(`#ff80cb`);
    });

    it('should return mixture of black background and foreground when opacity is 127', () => {
      const color = '#ff02987F';
      const background = '#000000';
      const result = calculateHexWithoutTransparency(color, background);
      expect(result).toBe(`#7f004b`);
    });

    it('should return mixture of coloured background and foreground when opacity is 127', () => {
      const color = '#ff02987F';
      const background = '#0298ff';
      const result = calculateHexWithoutTransparency(color, background);
      expect(result).toBe(`#804dcb`);
    });
  });

  describe('isLight', () => {
    it('should return true when hex is white', () => {
      const hex = '#ffffff';
      const result = isLight(hex);
      expect(result).toBe(true);
    });

    it('should return true when hex is light', () => {
      const hex = '#ff80cb';
      const result = isLight(hex);
      expect(result).toBe(true);
    });

    it('should return false when hex is dark', () => {
      const hex = '#7f004b';
      const result = isLight(hex);
      expect(result).toBe(false);
    });

    it('should return false when hex is black', () => {
      const hex = '#000000';
      const result = isLight(hex);
      expect(result).toBe(false);
    });
  });
});
