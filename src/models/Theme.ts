export interface Theme {
  name: 'light' | 'dark';

  colors: {
    primary: string;
    secondary: string;

    background: string;
    surface: string;

    title: string;
    text: string;
  };
}
