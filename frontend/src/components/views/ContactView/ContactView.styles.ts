import styled from 'styled-components';

export const ContactContainer = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ContactBox = styled.div`
  height: 70vh;
  width: 80vh;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.lightGrey};
  box-shadow:
    0 0 4px 4px ${({ theme }) => theme.backgroundColors.lightGrey},
    0 0 18px 8px ${({ theme }) => theme.backgroundColors.lightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContactHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.largeText.laptop};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  opacity: 0.7;
  height: 10rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  span {
    color: ${({ theme }) => theme.colors.secText};
  }
  @media ${({ theme }) => theme.devices.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.largeText.tablet};
  }
  @media ${({ theme }) => theme.devices.mobile} {
    font-size: ${({ theme }) => theme.fontSizes.largeText.tablet};
  }
`;
export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  gap: 4rem;
`;

export const ContactInputContianer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ContactInput = styled.input`
  height: 2vw;
  width: 25vw;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.backgroundColors.grey};
  color: ${({ theme }) => theme.colors.disabledText};
  border: 2px solid ${({ theme }) => theme.colors.disabledText};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secText};
  }
  @media ${({ theme }) => theme.devices.laptop} {
    height: 4vw;
    width: 35vw;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    height: 6vw;
    width: 40vw;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    height: 10vw;
    width: 55vw;
  }
`;
export const ContactText = styled.textarea`
  height: 15vw;
  width: 35vw;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.disabledText};
  background-color: ${({ theme }) => theme.backgroundColors.lightGrey};
  color: ${({ theme }) => theme.colors.disabledText};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secText};
  }
  @media ${({ theme }) => theme.devices.laptop} {
    height: 30vw;
    width: 60vw;
  }
  @media ${({ theme }) => theme.devices.tablet} {
    height: 30vw;
    width: 60vw;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    height: 45vw;
    width: 80vw;
  }
`;
export const ContactBtn = styled.button`
  width: 10rem;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.thText};
  background-color: ${({ theme }) => theme.colors.secText};
  font-size: ${({ theme }) => theme.fontSizes.mediumText.default};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.thText};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow:
    0 0 8px ${({ theme }) => theme.backgroundColors.lightGrey},
    0 0 18px ${({ theme }) => theme.backgroundColors.lightGrey};

  &:hover {
    background-color: ${({ theme }) => theme.colors.thText};
    color: ${({ theme }) => theme.colors.secText};
    box-shadow:
      0 0 12px ${({ theme }) => theme.colors.thText},
      0 0 24px ${({ theme }) => theme.colors.thText};
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.thText};
  }
`;
