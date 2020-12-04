import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      accent: string;
      accentLight: string;
      grey: string;
      lightGrey: string;
      black: string;
      white: string;
      error: string;
    };
    font: {
      sizes: {
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
        title: string;
      };
    };
  }
}
