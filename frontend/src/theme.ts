import 'styled-components';
import type { DefaultTheme } from 'styled-components/dist/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      headingText: string;
      text: string;
      secText: string;
      disabledText: string;
    };
    fontSizes: {
      headingText: {
        default: string;
        laptop: string;
        tablet: string;
        mobile: string;
      };
      text: {
        default: string;
        laptop: string;
        tablet: string;
        mobile: string;
      };
    };
    devices: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    headingText: '#fafafa',
    text: '#ffffff',
    secText: '#b2e58b',
    disabledText: '#d9d9d9',
  },

  devices: {
    laptop: '(max-width: 1024px)',
    tablet: '(max-width: 768px)',
    mobile: '(max-width: 490px)',
  },

  fontSizes: {
    headingText: {
      default: '1rem',
      laptop: '0.95rem',
      tablet: '0.9rem',
      mobile: '0.85rem',
    },
    text: {
      default: '0.875rem',
      laptop: '0.825rem',
      tablet: '0.8rem',
      mobile: '0.75rem',
    },
  },
};
