import styled from 'styled-components';
interface ProgressProps {
  value: number;
}
export const SkillsContianer = styled.section`
  height: 80vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SkillsBoxContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    gap: 2rem;
  }
`;

export const SkillBoxOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: row;
    gap: 2rem;
  }
`;
export const SkillBoxOption = styled.div<{ selected: boolean }>`
  width: 40vh;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColors.lightGrey};
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.largeText.mobile};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.disabledText};
  box-shadow: ${({ selected, theme }) =>
    selected
      ? `
      0 0 4px 4px ${theme.colors.thText},
      0 0 18px 8px ${theme.colors.thText}

    `
      : `
      0 0 4px 4px ${theme.backgroundColors.lightGrey},
      0 0 18px 8px ${theme.backgroundColors.lightGrey}
    `};
  cursor: pointer;
  transition: all 0.8s ease-in-out;

  @media (max-width: 1000px) {
    width: 40vw;
    height: 20vw;
  }
`;
export const SkillsBox = styled.div`
  width: 60vh;
  height: 40vh;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.lightGrey};
  box-shadow:
    0 0 4px 4px ${({ theme }) => theme.backgroundColors.lightGrey},
    0 0 18px 8px ${({ theme }) => theme.backgroundColors.lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const SkillBoxDescription = styled.div``;

export const SkillLanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  @media ${({ theme }) => theme.devices.mobile} {
    padding: 0 1rem;
    justify-content: space-between;
  }
`;

export const ProgressFill = styled.div<ProgressProps>`
  width: ${({ value }) => value}%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.thText};
  transition: width 0.3s ease-in-out;
`;

export const SkillLanguage = styled.p`
  color: ${({ theme }) => theme.colors.disabledText};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.mediumText.tablet};
  span {
    color: ${({ theme }) => theme.colors.secText};
  }
`;

export const ProgressBarContainer = styled.div`
  min-width: 400px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.disabledText};
  border-radius: 8px;
  overflow: hidden;

  @media ${({ theme }) => theme.devices.mobile} {
    min-width: 50vw;
  }
`;

export const PercentageLabel = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.headingText};
`;
