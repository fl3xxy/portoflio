import {
  LandingContainer,
  LandingSectionOne,
  LandingSectionOneText,
  LandingSectionOnePhoto,
  LandingSectionTwo,
  LandingSectionTwoLeft,
  LandingSectionTwoRight,
  LandingSectionTwoHeader,
  LandingSectionTwoContent,
  LandingSectionTwoLinkContainer,
  LandingSectionTwoLink,
} from './LandingView.styles';
import cv from '/public/files/Tomasz Mielnicki.pdf';
import photo from '../../../assets/me.png';
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaEnvelope,
} from 'react-icons/fa';
export const LandingView: React.FC = () => {
  return (
    <>
      <LandingContainer>
        <LandingSectionOne>
          <LandingSectionOneText>
            Hello, I'm <span>Tom</span>.
          </LandingSectionOneText>
          <LandingSectionOnePhoto>
            <img src={photo} alt="photo" />
          </LandingSectionOnePhoto>
          <LandingSectionOneText>I code with style.</LandingSectionOneText>
        </LandingSectionOne>
        <LandingSectionTwo>
          <LandingSectionTwoLeft>
            <LandingSectionTwoHeader>About</LandingSectionTwoHeader>
            <LandingSectionTwoContent>
              I'am programmer with a passion for creating modern web
              applications. Specialize in diffrent programming languages and
              technologies. I have knowledge and skills in programming languages
              such as <span>React</span>, <span>FastAPI</span>,{' '}
              <span>TypeScript</span>, <span>Python</span>. I am also proficient
              in using tools like <span>Jira</span>, <span>Figma</span> and{' '}
              <span>Git</span>. I attach importance to clean code and excellent
              development practices to make the scalability, performance and
              execution of the application.
            </LandingSectionTwoContent>
          </LandingSectionTwoLeft>
          <LandingSectionTwoRight>
            <LandingSectionTwoHeader>
              <span>Links</span>
            </LandingSectionTwoHeader>
            <LandingSectionTwoContent>
              <LandingSectionTwoLinkContainer>
                <FaGithub />
                <LandingSectionTwoLink href="https://github.com/fl3xxy">
                  Github
                </LandingSectionTwoLink>
              </LandingSectionTwoLinkContainer>
              <LandingSectionTwoLinkContainer>
                <FaLinkedin />
                <LandingSectionTwoLink href="www.linkedin.com/in/tomaszmielnicki">
                  LinkedIn
                </LandingSectionTwoLink>
              </LandingSectionTwoLinkContainer>
              <LandingSectionTwoLinkContainer>
                <FaFileDownload />
                <LandingSectionTwoLink href={cv}>
                  Download CV
                </LandingSectionTwoLink>
              </LandingSectionTwoLinkContainer>
              <LandingSectionTwoLinkContainer>
                <FaEnvelope />
                <LandingSectionTwoLink href="mailto:mielnicki-tomek@wp.pl">
                  Mail
                </LandingSectionTwoLink>
              </LandingSectionTwoLinkContainer>
            </LandingSectionTwoContent>
          </LandingSectionTwoRight>
        </LandingSectionTwo>
      </LandingContainer>
    </>
  );
};
