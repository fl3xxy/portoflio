import styled from 'styled-components';
import { fadeInUp, typing, blink } from '../../modules/animations';

export const LandingContainer = styled.section`
  height: calc(100vh - 5rem);
`;

//First section
export const LandingSectionOne = styled.div`
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
    text-shadow:
      0 0 5px ${({ theme }) => theme.colors.secText},
      0 0 8px ${({ theme }) => theme.colors.secText},
      0 0 10px ${({ theme }) => theme.colors.secText};
  }
  .sec {
    color: ${({ theme }) => theme.colors.thText};
    text-shadow: none;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid ${({ theme }) => theme.colors.secText};
    width: 0;
    animation:
      ${typing} 2s steps(12) forwards,
      ${blink} 1s step-end infinite;
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
`;
export const LandingSectionOnePhoto = styled.div`
  img {
    border-radius: 9rem;
    max-width: 30vh;
    background-color: ${({ theme }) => theme.colors.secText};
    border: 2px solid ${({ theme }) => theme.colors.thText};
    opacity: 0.9;

    box-shadow:
      0 0 12px 4px ${({ theme }) => theme.colors.thText},
      0 0 24px 8px ${({ theme }) => theme.colors.thText};
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
export const LandingSectionTwo = styled.div`
  height: calc(100vh - 5rem - 35vh);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  place-content: center;
  gap: 1rem;
  opacity: 0;
  padding: 0 1rem;
  animation: ${fadeInUp} 1.5s ease-out forwards;
  animation-delay: 1.5s;

  @media ${({ theme }) => theme.devices.tablet} {
    display: flex;
    flex-direction: column;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    padding: 0.3rem;
  }
`;
export const LandingSectionTwoLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColors.grey};
  border-radius: 1rem;
  box-shadow:
    0 0 4px 4px ${({ theme }) => theme.backgroundColors.grey},
    0 0 18px 8px ${({ theme }) => theme.backgroundColors.grey};
  align-self: stretch;
  align-items: center;
  height: 20vw;

  @media ${({ theme }) => theme.devices.laptop} {
    height: 38vw;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    width: 100%;
    min-height: fit-content;
  }
`;
export const LandingSectionTwoRight = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColors.lightGrey};
  border-radius: 1rem;
  align-items: center;
  width: 100%;
  height: 20vw;

  box-shadow:
    0 0 4px 4px ${({ theme }) => theme.backgroundColors.lightGrey},
    0 0 18px 8px ${({ theme }) => theme.backgroundColors.lightGrey};

  @media ${({ theme }) => theme.devices.laptop} {
    height: 38vw;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    width: 100%;
    min-height: fit-content;
  }
`;
export const LandingSectionTwoHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.largeText.tablet};
  color: ${({ theme }) => theme.colors.thText};
  text-align: center;
  span {
    color: ${({ theme }) => theme.colors.secText};
    text-shadow:
      0 0 5px ${({ theme }) => theme.colors.secText},
      0 0 8px ${({ theme }) => theme.colors.secText},
      0 0 10px ${({ theme }) => theme.colors.secText};
  }
`;
export const LandingSectionTwoContent = styled.div`
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
  span {
    position: relative;
    color: ${({ theme }) => theme.colors.text};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.disabledText};
  }
`;

export const CopiedInfo = styled.span`
  position: absolute;
  left: 0;
  color: white;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
