const colors = {
  green: '#039b00',
  darkGray: '#2f2e41',
  white: '#ffffff',
  lightGray: '#999999',
  blue: '#009edd',
  darkBlue: '#0073a1',
  black: '#333333',
  veryLightGray: '#d9d9d9',
};

const spacing = {
  '1x': '8px',
  '1.5x': '12px',
  '2x': '16px',
  '3x': '24px',
  '4x': '32px',
  '5x': '40px',
  '6x': '48px',
  '7x': '56px',
  '8x': '64px',
  '9x': '72px',
  '10x': '80px',
};

const breakpoints = {
  mobile: '720px',
  webMobile: '328px',
  webContent: '1080px',
};

export type Theme = {
  colors: typeof colors;
  spacing: typeof spacing;
  breakpoints: typeof breakpoints;
};

export const THEME: Theme = {
  colors: colors,
  spacing: spacing,
  breakpoints: breakpoints,
};
