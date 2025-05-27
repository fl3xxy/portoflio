import 'styled-components';
import type { DefaultTheme } from 'styled-components/dist/types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      headingText: string;
      text: string;
      secText: string;
      thText: string;
      disabledText: string;
    };
    backgroundColors: {
      grey: string;
      lightGrey: string;
    };
    fontSizes: {
      largeText: {
        default: string;
        laptop: string;
        tablet: string;
        mobile: string;
      };
      mediumText: {
        default: string;
        laptop: string;
        tablet: string;
        mobile: string;
      };
      smallText: {
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
    thText: '#306317',
    disabledText: '#d9d9d9',
  },
  backgroundColors: {
    grey: 'rgba(31, 31, 31, 0.6)',
    lightGrey: 'rgba(47, 47, 47, 0.86)',
  },

  devices: {
    laptop: '(max-width: 1024px)',
    tablet: '(max-width: 768px)',
    mobile: '(max-width: 490px)',
  },

  fontSizes: {
    largeText: {
      default: '4rem',
      laptop: '3rem',
      tablet: '2rem',
      mobile: '1.2rem',
    },

    mediumText: {
      default: '1rem',
      laptop: '0.95rem',
      tablet: '0.9rem',
      mobile: '0.85rem',
    },

    smallText: {
      default: '0.875rem',
      laptop: '0.825rem',
      tablet: '0.8rem',
      mobile: '0.75rem',
    },
  },
};
