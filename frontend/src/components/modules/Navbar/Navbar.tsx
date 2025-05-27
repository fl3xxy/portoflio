//react
import { useRef, useState, useEffect } from 'react';

//styles
import {
  NavContainer,
  NavLeft,
  NavRight,
  LinkNav,
  NavBurger,
} from './Navbar.styles';

//icons
import { FaAlignJustify, FaAlignRight } from 'react-icons/fa6';

export const Navbar: React.FC = () => {
  const [isResponsiveNavOpen, setResponsiveNavOpen] = useState(false);

  const showNavbar = () => {
    setResponsiveNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isResponsiveNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isResponsiveNavOpen]);

  return (
    <>
      <NavContainer>
        <NavLeft>Tom.dev</NavLeft>
        <NavRight isOpen={isResponsiveNavOpen}>
          <LinkNav>Hire</LinkNav>
          <LinkNav>
            <span>About</span>
          </LinkNav>
          <LinkNav>Projects</LinkNav>
          <LinkNav>
            <span>Experience</span>
          </LinkNav>
          <LinkNav>Skills</LinkNav>
          <LinkNav>
            <span>Contact</span>
          </LinkNav>
        </NavRight>
        <NavBurger onClick={showNavbar}>
          {isResponsiveNavOpen ? <FaAlignRight /> : <FaAlignJustify />}
        </NavBurger>
      </NavContainer>
    </>
  );
};
