import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;

  @media ${({ theme }) => theme.devices.mobile} {
    margin-top: 6rem;
    padding: 0 0.3rem;
    flex-direction: column;
    height: fit-content;
  }
`;

export const ProjectDescriptionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.largeText.mobile};
  color: ${({ theme }) => theme.colors.disabledText};
  height: auto;
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.largeText.mobile};
  }

  @media ${({ theme }) => theme.devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.mediumText.default};
    width: fit-content;
  }
`;
// Left projectsview
export const ProjectsSectionLeft = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  @media ${({ theme }) => theme.devices.mobile} {
    flex-direction: row;
    height: fit-content;
  }
`;

export const CirclesContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColors.lightGrey};
  border-radius: 2rem;
  box-shadow:
    0 0 12px 4px ${({ theme }) => theme.colors.thText},
    0 0 24px 8px ${({ theme }) => theme.colors.thText};

  @media ${({ theme }) => theme.devices.mobile} {
    display: flex;
    flex-direction: row;
  }
`;

export const ProjectsLeftCircle = styled.div<{ selected: boolean }>`
  display: flex;
  height: 18rem;
  width: 18rem;
  border-radius: 10rem;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.secText : theme.colors.thText};
  font-size: 10rem;
  justify-content: center;
  place-items: center;
  opacity: ${({ selected }) => (selected ? 1 : 0.7)};
  cursor: pointer;
  transition: all 0.8s ease;

  @media ${({ theme }) => theme.devices.laptop} {
    height: 14rem;
    width: 14rem;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    height: 12rem;
    width: 12rem;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    height: 8rem;
    width: 8rem;
  }
`;

// Right projectsview
export const ProjectsSectionRight = styled.div`
  display: flex;
  max-width: 60%;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  @media ${({ theme }) => theme.devices.mobile} {
    max-width: fit-content;
  }
`;

export const ProjectsRightHeader = styled.p`
  position: relative;
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

export const ProjectsRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  background-color: ${({ theme }) => theme.backgroundColors.grey};
  border-radius: 0 3rem 0 3rem;
  border: 2px solid ${({ theme }) => theme.backgroundColors.grey};
  box-shadow:
    0 0 12px 4px ${({ theme }) => theme.backgroundColors.grey},
    0 0 24px 8px ${({ theme }) => theme.backgroundColors.grey};
  @media ${({ theme }) => theme.devices.mobile} {
    max-width: 100%;
  }
`;

export const ProjectsSectionRightOne = styled.div`
  display: flex;
  align-items: start;
`;

export const ProjectsSectionRightOneOptions = styled.div<{ selected: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.largeText.tablet};
  background-color: ${({ selected, theme }) =>
    selected ? theme.backgroundColors.lightGrey : theme.backgroundColors.grey};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.text : theme.colors.disabledText};
  padding: 1rem;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundColors.lightGrey};
    opacity: 0.9;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.largeText.mobile};
  }
  @media ${({ theme }) => theme.devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.largeText.mobile};
    padding: 0.8rem;
  }
`;

export const ProjectsSectionRightTwo = styled.div`
  text-align: center;
`;

export const ProjectsMoreBtn = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.thText};
  background-color: ${({ theme }) => theme.colors.secText};
  font-size: ${({ theme }) => theme.fontSizes.mediumText.default};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.thText};
  text-decoration: none;
  cursor: pointer;
  transition: all ease 2s;
  box-shadow:
    0 0 12px 4px ${({ theme }) => theme.backgroundColors.lightGrey},
    0 0 24px 8px ${({ theme }) => theme.backgroundColors.lightGrey};
  &:hover {
    color: ${({ theme }) => theme.colors.disabledText};
    border-color: ${({ theme }) => theme.colors.disabledText};
    background-color: black;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.mediumText.mobile};
    padding: 0.5rem;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    right: 0.1rem;
  }
`;
