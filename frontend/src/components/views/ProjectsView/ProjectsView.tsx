import { useState } from 'react';

import {
  CirclesContainer,
  ProjectDescriptionText,
  ProjectsContainer,
  ProjectsLeftCircle,
  ProjectsMoreBtn,
  ProjectsRightContainer,
  ProjectsRightHeader,
  ProjectsSectionLeft,
  ProjectsSectionRight,
  ProjectsSectionRightOne,
  ProjectsSectionRightOneOptions,
  ProjectsSectionRightTwo,
} from './Projects.styles';

// icons
import { PiTreeStructureDuotone } from 'react-icons/pi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdComputer } from 'react-icons/md';
import { BackgroundText } from '../../modules/BackgroundText';

type ProjectOption = 'data' | 'startup' | 'webapp';

export const ProjectsView: React.FC = () => {
  const [selectedProjectDescription, setSelectedProjectDescription] =
    useState<ProjectOption>('data');

  const handleDescription = (choice: ProjectOption) => {
    setSelectedProjectDescription(choice);
  };

  const DataDescription = () => {
    return (
      <>
        <ProjectDescriptionText>
          FastAPI TodoApp is a fully functional backend API for a Todo List
          application, developed using FastAPI and SQLAlchemy. It includes
          complete user management, allowing users to register and log in
          securely using JWT-based authentication. Once authenticated, users can
          create, view, and delete their personal todo items. The application
          also features role-based access control, distinguishing between
          regular users and administrators. Administrators have access to a
          dedicated panel where they can view all registered users and all todos
          in the system, providing full oversight and management capabilities.
        </ProjectDescriptionText>
      </>
    );
  };

  const StartupDescription = () => {
    return (
      <>
        <ProjectDescriptionText>
          Startup Project is an early-stage web platform developed as a proof of
          concept for a potential business idea. The goal was to build a solid
          foundation for scalable web development, focusing on clean
          architecture and modern technologies. The backend was built using
          Django, providing a robust and secure framework for rapid development.
          On the frontend, we used React with TypeScript and styled-components
          to ensure type safety, modular design, and consistent UI styling. The
          project was managed using Git for version control and Jira for task
          tracking and team collaboration.
        </ProjectDescriptionText>
      </>
    );
  };

  const WebappDescription = () => {
    return (
      <>
        <ProjectDescriptionText>
          SunnyPizza is a demo web application for an online pizzeria, created
          to showcase a full-stack development setup using modern technologies.
          The frontend was built with React.js, providing a fast, interactive,
          and user-friendly interface. The backend is powered by FastAPI, a
          high-performance Python framework ideal for building APIs quickly and
          efficiently. Together, they form a responsive and modular application
          structure.
        </ProjectDescriptionText>
      </>
    );
  };
  return (
    <>
      <ProjectsContainer id="projects">
        <BackgroundText>Projects</BackgroundText>
        <ProjectsSectionLeft>
          <CirclesContainer>
            <ProjectsLeftCircle
              onClick={() => handleDescription('data')}
              selected={selectedProjectDescription === 'data'}
            >
              <PiTreeStructureDuotone />
            </ProjectsLeftCircle>
            <ProjectsLeftCircle
              onClick={() => handleDescription('startup')}
              selected={selectedProjectDescription === 'startup'}
            >
              <IoSettingsOutline />
            </ProjectsLeftCircle>
            <ProjectsLeftCircle
              onClick={() => handleDescription('webapp')}
              selected={selectedProjectDescription === 'webapp'}
            >
              <MdComputer />
            </ProjectsLeftCircle>
          </CirclesContainer>
        </ProjectsSectionLeft>
        <ProjectsSectionRight>
          <ProjectsRightHeader>
            Projects{' '}
            <ProjectsMoreBtn href="https://github.com/fl3xxy">
              Check more
            </ProjectsMoreBtn>
          </ProjectsRightHeader>
          <ProjectsRightContainer>
            <ProjectsSectionRightOne>
              <ProjectsSectionRightOneOptions
                onClick={() => handleDescription('data')}
                selected={selectedProjectDescription === 'data'}
              >
                Data project
              </ProjectsSectionRightOneOptions>
              <ProjectsSectionRightOneOptions
                onClick={() => handleDescription('startup')}
                selected={selectedProjectDescription === 'startup'}
              >
                Startup
              </ProjectsSectionRightOneOptions>
              <ProjectsSectionRightOneOptions
                onClick={() => handleDescription('webapp')}
                selected={selectedProjectDescription === 'webapp'}
              >
                Web app
              </ProjectsSectionRightOneOptions>
            </ProjectsSectionRightOne>
            <ProjectsSectionRightTwo>
              {selectedProjectDescription === 'data' ? (
                <DataDescription />
              ) : null}
              {selectedProjectDescription === 'startup' ? (
                <StartupDescription />
              ) : null}
              {selectedProjectDescription === 'webapp' ? (
                <WebappDescription />
              ) : null}
            </ProjectsSectionRightTwo>
          </ProjectsRightContainer>
        </ProjectsSectionRight>
      </ProjectsContainer>
    </>
  );
};
