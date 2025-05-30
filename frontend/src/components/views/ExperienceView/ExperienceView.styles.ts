import styled from 'styled-components';

export const ExperienceContainer = styled.section`
  margin-top: 10rem;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.devices.mobile} {
    height: 90vh;
  }
`;
export const ExperienceBoxFHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.largeText.laptop};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  opacity: 0.7;
  transition: all 0.8s ease-in-out;

  @media ${({ theme }) => theme.devices.laptop} {
    margin: 2rem 0;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.largeText.tablet};
  }
  @media ${({ theme }) => theme.devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.largeText.tablet};
    margin: 1rem 0;
  }
`;
export const ExperienceBox = styled.div`
  height: auto;
  width: 80vh;
  border-radius: 1.5rem;
  z-index: 100;
  background-color: ${({ theme }) => theme.backgroundColors.lightGrey};
  display: flex;
  box-shadow:
    0 0 4px 4px ${({ theme }) => theme.backgroundColors.lightGrey},
    0 0 18px 8px ${({ theme }) => theme.backgroundColors.lightGrey};

  &:hover ${ExperienceBoxFHeader} {
    color: ${({ theme }) => theme.colors.secText};
    text-shadow: 0 0 6px ${({ theme }) => theme.colors.secText};
    transition: all 0.3s ease-in-out;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    height: 75vh;
    border: none;
    width: 100%;
  }
`;

export const ExperienceBoxFirstSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 1rem 2rem;
`;

export const ExperienceBoxFTitleContianer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  justify-content: space-around;
  @media ${({ theme }) => theme.devices.mobile} {
    gap: 1rem;
  }
`;
export const ExperienceBoxFTitle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.largeText.mobile};
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.mediumText.default};
  }
`;

export const ExperienceBoxSecondSection = styled.div`
  flex: 1;
`;

export const ExperienceBoxContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ExperienceBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.backgroundColors.grey};
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  border-radius: 1rem;
  user-select: none;
  border: 1px solid ${({ theme }) => theme.colors.disabledText};

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    background-color: gray;
  }

  @media ${({ theme }) => theme.devices.laptop} {
    gap: 0.65rem;
    padding: 1.25rem;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    gap: 0.4rem;
    padding: 1rem;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    gap: 0.2rem;
    padding: 0.5rem;
  }
`;

export const ExperienceBoxContentTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.mediumText.default};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.disabledText};
`;

export const ExperienceBoxContentYear = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secText};
  font-style: italic;
`;

export const ExperienceBoxContentDescription = styled.div`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  font-size: 0.95rem;
`;
