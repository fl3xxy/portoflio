//react
import { useState, useEffect } from 'react';

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
        <NavLeft>
          <span>Tom</span>.dev
        </NavLeft>
        <NavRight $isOpen={isResponsiveNavOpen}>
          <LinkNav href="#home">Home</LinkNav>
          <LinkNav href="#projects">
            <span>Projects</span>
          </LinkNav>
          <LinkNav href="#experience">Experience</LinkNav>
          <LinkNav href="#skills">
            <span>Skills</span>
          </LinkNav>
          <LinkNav>Contact</LinkNav>
        </NavRight>
        <NavBurger onClick={showNavbar}>
          {isResponsiveNavOpen ? <FaAlignRight /> : <FaAlignJustify />}
        </NavBurger>
      </NavContainer>
    </>
  );
};
