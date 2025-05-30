import styled from 'styled-components';

export const NavContainer = styled.nav`
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundColors.grey};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const NavLeft = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.mediumText.default};
  font-weight: bold;
  display: flex;
  padding-left: 1rem;
  color: ${({ theme }) => theme.colors.headingText};
  span {
    text-shadow:
      0 0 5px ${({ theme }) => theme.colors.headingText},
      0 0 8px ${({ theme }) => theme.colors.headingText},
      0 0 10px ${({ theme }) => theme.colors.headingText};
  }
  @media ${({ theme }) => theme.devices.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.mediumText.laptop};
  }
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.mediumText.tablet};
  }
  @media ${({ theme }) => theme.devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.mediumText.mobile};
  }
`;

export const NavRight = styled.div<{ $isOpen: boolean }>`
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  @media ${({ theme }) => theme.devices.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.mediumText.laptop};
    gap: 3rem;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    background-color: rgba(74, 74, 74, 0.9);
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    font-size: ${({ theme }) => theme.fontSizes.largeText.mobile};
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
  font-size: ${({ theme }) => theme.fontSizes.smallText.default};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  &:hover {
    opacity: 0.6;
  }
  span {
    color: ${({ theme }) => theme.colors.secText};
  }
  @media ${({ theme }) => theme.devices.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.smallText.laptop};
  }
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.smallText.tablet};
  }
  @media ${({ theme }) => theme.devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.smallText.mobile};
  }
`;

export const NavBurger = styled.button`
  display: none;
  padding-right: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.mediumText.default};
  background: none;
  border: none;
  cursor: pointer;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.mediumText.tablet};
    display: flex;
    z-index: 999;
  }
`;
