import styled from 'styled-components';
import { fadeInUp } from '../../modules/animations';

export const LandingContainer = styled.div`
  height: calc(100vh - 5rem);
`;

//First section
export const LandingSectionOne = styled.section`
  height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  opacity: 0;
  animation: ${fadeInUp} 1.5s ease-out forwards;
  animation-delay: 0.4s;

  @media ${({ theme }) => theme.devices.laptop} {
    gap: 1rem;
  }
`;
export const LandingSectionOneText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.largeText.default};
  color: ${({ theme }) => theme.colors.headingText};
  text-align: center;
  cursor: default;
  span {
    color: ${({ theme }) => theme.colors.secText};
  }
  &:hover {
    opacity: 0.7;
  }
  @media ${({ theme }) => theme.devices.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.largeText.laptop};
  }
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.largeText.tablet};
  }
  @media ${({ theme }) => theme.devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.largeText.mobile};
  }
`;
export const LandingSectionOnePhoto = styled.div`
  img {
    border-radius: 9rem;
    max-width: 30vh;
  }
  @media ${({ theme }) => theme.devices.laptop} {
    img {
      width: 25vh;
    }
  }
  @media ${({ theme }) => theme.devices.tablet} {
    img {
      width: 20vh;
    }
  }
  @media ${({ theme }) => theme.devices.mobile} {
    img {
      width: 15vh;
    }
  }
`;

//Second section
export const LandingSectionTwo = styled.section`
  height: calc(100vh - 5rem - 35vh);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  place-content: center;
  opacity: 0;
  padding: 0 1rem;
  animation: ${fadeInUp} 1.5s ease-out forwards;
  animation-delay: 1.5s;

  @media ${({ theme }) => theme.devices.tablet} {
    display: flex;
    flex-direction: column;
  }
`;
export const LandingSectionTwoLeft = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColors.grey};
  border-radius: 1rem;
  align-self: stretch;
  align-items: center;
`;
export const LandingSectionTwoRight = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColors.lightGrey};
  border-radius: 1rem;
  align-self: stretch;
  align-items: center;
`;
export const LandingSectionTwoHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.largeText.tablet};
  color: ${({ theme }) => theme.colors.thText};
  text-align: center;
  span {
    color: ${({ theme }) => theme.colors.secText};
  }
`;
export const LandingSectionTwoContent = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mediumText.default};
  color: ${({ theme }) => theme.colors.disabledText};
  text-align: center;
  max-width: 80%;
  flex-direction: column;
  span {
    color: ${({ theme }) => theme.colors.secText};
  }
`;
export const LandingSectionTwoLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media ${({ theme }) => theme.devices.mobile} {
    gap: 0.5rem;
  }
`;
export const LandingSectionTwoLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.disabledText};
  }
`;
