export interface Theme {
    bodyBackground: string;
    headerBackground: string;
    text: string;
    cardBackground: string;
    cardText: string;
    buttonText: string;
    buttonBackground: string;
    state: boolean;
  };

export const lightTheme: Theme = {
  bodyBackground: '#f2f2f2',
  headerBackground: '#ffffff',
  text: '#1a1a1a',
  cardBackground: '#ffffff',
  cardText: '#1a1a1a',
  buttonText: '#ffffff',
  buttonBackground: '#00BFF7',
  state: true
};

export const darkTheme: Theme = {
  bodyBackground: '#1a1a1a',
  headerBackground: '#333333',
  text: '#ffffff',
  cardBackground: '#333333',
  cardText: '#ffffff',
  buttonText: '#ffffff',
  buttonBackground: '#4caf50',
  state: false
};
