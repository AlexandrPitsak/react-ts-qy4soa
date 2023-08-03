export interface Theme { // https://m2.material.io/design/color/dark-theme.html#behavior
    background: string; // color of background
    surface: string; // color of wrapper for text on background
    primary: string; // colored items on surface 
    secondary: string; // colored items on background (active)
    textBackground: string; // text 
    textSurface: string; // text 
    onPrimary: string; // text 
    onSecondary: string; // text 
    state: boolean;
  };

export const lightTheme: Theme = {
    background: '#FFFFFF',
    surface: '#e2e3e1',
    primary: '#6200EE',
    secondary: '#03DAC6',
    textBackground: '#FFFFFF',
    textSurface: '#FFFFFF',
    onPrimary: '#000000',
    onSecondary: '#000000',
  state: true
};

export const darkTheme: Theme = {
  background: '#121212',
  surface: '#333333',
  primary: '#4046ff',
  secondary: '#c7f229',
  textBackground: '#f2f5e6',
  textSurface: '#f2f5e6',
  onPrimary: '#121212',
  onSecondary: '#121212',
state: false
};
