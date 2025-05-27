import styled from 'styled-components';

export const NavContainer = styled.nav`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(31, 31, 31, 0.6);
`;

export const NavLeft = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.headingText.default};
  font-weight: bold;
  display: flex;
  padding-left: 1rem;
  color: ${({ theme }) => theme.colors.headingText};

  @media ${({ theme }) => theme.devices.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.headingText.laptop};
  }
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.headingText.tablet};
  }
  @media ${({ theme }) => theme.devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.headingText.mobile};
  }
`;

export const NavRight = styled.div<{ isOpen?: boolean }>`
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  @media ${({ theme }) => theme.devices.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.headingText.laptop};
    gap: 3rem;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    background-color: rgba(74, 74, 74, 0.8);
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 998;
  }
`;

export const LinkNav = styled.a`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.text.default};
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    opacity: 0.6;
  }
  span {
    color: ${({ theme }) => theme.colors.secText};
  }
  @media ${({ theme }) => theme.devices.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.headingText.laptop};
  }
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.headingText.tablet};
  }
  @media ${({ theme }) => theme.devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.headingText.mobile};
  }
`;

export const NavBurger = styled.button`
  display: none;
  padding-right: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.headingText.default};
  background: none;
  border: none;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.headingText.tablet};
    display: flex;
    z-index: 999;
  }
`;
