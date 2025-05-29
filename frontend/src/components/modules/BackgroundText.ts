import styled from 'styled-components';

export const BackgroundText = styled.p`
  position: absolute;
  opacity: 0.15;
  z-index: -1;
  color: ${({ theme }) => theme.colors.disabledText};
  user-select: none;
  font-size: 20vw;
  text-shadow:
    0 0 5px ${({ theme }) => theme.colors.disabledText},
    0 0 8px ${({ theme }) => theme.colors.disabledText},
    0 0 10px ${({ theme }) => theme.colors.disabledText};
  @media (max-width: 1200px) {
    font-size: 17vw;
  }

  @media (max-width: 768px) {
    font-size: 20vw;
  }

  @media (max-width: 480px) {
    font-size: 18vw;
  }
`;
