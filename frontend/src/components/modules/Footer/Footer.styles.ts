import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColors.grey};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.disabledText};
`;

export const FooterLeft = styled.div`
  padding-left: 1rem;
`;
export const FooterRight = styled.div`
  padding-right: 1rem;
`;
