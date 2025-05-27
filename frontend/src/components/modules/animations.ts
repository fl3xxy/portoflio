import { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const typing = keyframes`
   from { width: 0 }
   to { width: 100% }
`;

export const blink = keyframes`
   50% { border-color: transparent }
`;
