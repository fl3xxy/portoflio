import { FooterContainer, FooterLeft, FooterRight } from './Footer.styles';

export const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <FooterLeft>Tom.dev</FooterLeft>
        <FooterRight>
          © {new Date().getFullYear()} Tom. All rights reserved.
        </FooterRight>
      </FooterContainer>
    </>
  );
};
