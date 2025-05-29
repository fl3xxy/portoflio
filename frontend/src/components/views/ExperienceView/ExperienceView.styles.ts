import styled from 'styled-components';

export const ExperienceContainer = styled.section`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.devices.mobile} {
    height: 90vh;
  }
`;

export const ExperienceBox = styled.div`
  height: 90vh;
  width: 80vh;
  border-radius: 1.5rem;
  z-index: 100;
  background-color: ${({ theme }) => theme.backgroundColors.lightGrey};
  display: flex;
  box-shadow:
    0 0 4px 4px ${({ theme }) => theme.backgroundColors.lightGrey},
    0 0 18px 8px ${({ theme }) => theme.backgroundColors.lightGrey};
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
  padding: 0 1rem;
`;

export const ExperienceBoxFHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.largeText.laptop};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  opacity: 0.7;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.largeText.tablet};
  }
  @media ${({ theme }) => theme.devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.largeText.tablet};
  }
`;
export const ExperienceBoxFTitleContianer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  justify-content: space-around;
`;
export const ExperienceBoxFTitle = styled.p`
  color: ${({ theme }) => theme.colors.secText};
  font-size: ${({ theme }) => theme.fontSizes.largeText.mobile};
`;

export const ExperienceBoxSecondSection = styled.div`
  flex: 1;
`;
export const ExperienceBoxContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ExperienceBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColors.grey};
`;
export const ExperienceBoxContentTitle = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;
export const ExperienceBoxContentYear = styled.div`
  color: ${({ theme }) => theme.colors.thText};
`;
export const ExperienceBoxContentDescription = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;
