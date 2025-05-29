import { useState, type ReactElement } from 'react';

import { BackgroundText } from '../../modules/BackgroundText';
import {
  PercentageLabel,
  ProgressBarContainer,
  ProgressFill,
  SkillBoxDescription,
  SkillBoxOption,
  SkillBoxOptionContainer,
  SkillLanguageContainer,
  SkillLanguage,
  SkillsBox,
  SkillsBoxContainer,
  SkillsContianer,
} from './SkillsView.styles';
//icons
import { FaPython, FaJsSquare, FaReact, FaAws, FaDocker } from 'react-icons/fa';
import { SiFastapi, SiTypescript } from 'react-icons/si';
import { GiPoland } from 'react-icons/gi';
import { IconBase } from 'react-icons';

type SkillsOption = 'tech' | 'education';

type SkillBarProps = {
  name: string;
  value: number;
  icon: ReactElement;
};
const skills = [
  { name: 'Python', level: 90, icon: <FaPython /> },
  { name: 'FastAPI', level: 50, icon: <SiFastapi /> },
  { name: 'JavaScript', level: 75, icon: <FaJsSquare /> },
  { name: 'TypeScript', level: 60, icon: <SiTypescript /> },
  { name: 'React', level: 70, icon: <FaReact /> },
  { name: 'AWS', level: 30, icon: <FaAws /> },
  { name: 'Docker', level: 30, icon: <FaDocker /> },
];
const languages = [
  { name: 'Polish', level: 100, icon: <GiPoland /> },
  { name: 'English', level: 80, icon: <GiPoland /> },
];
export const SkillsView: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillsOption>('tech');
  const handleSkill = (choice: SkillsOption) => {
    setSelectedSkill(choice);
  };
  const SkillDescription = ({ name, value, icon }: SkillBarProps) => {
    return (
      <>
        <SkillBoxDescription>
          <SkillLanguageContainer>
            <SkillLanguage>
              {icon} {name}
            </SkillLanguage>
            <ProgressBarContainer>
              <ProgressFill value={value} />
            </ProgressBarContainer>
          </SkillLanguageContainer>
        </SkillBoxDescription>
      </>
    );
  };

  return (
    <>
      <SkillsContianer id="skills">
        <BackgroundText>Skills</BackgroundText>
        <SkillsBoxContainer>
          <SkillBoxOptionContainer>
            <SkillBoxOption
              onClick={() => handleSkill('tech')}
              selected={selectedSkill === 'tech'}
            >
              Tech Stack
            </SkillBoxOption>
            <SkillBoxOption
              onClick={() => handleSkill('education')}
              selected={selectedSkill === 'education'}
            >
              Languages
            </SkillBoxOption>
          </SkillBoxOptionContainer>
          <SkillsBox>
            {selectedSkill === 'tech'
              ? skills.map((skill) => (
                  <SkillDescription
                    key={skill.name}
                    name={skill.name}
                    value={skill.level}
                    icon={skill.icon}
                  />
                ))
              : languages.map((language) => (
                  <SkillDescription
                    key={language.name}
                    name={language.name}
                    value={language.level}
                    icon={language.icon}
                  />
                ))}
          </SkillsBox>
        </SkillsBoxContainer>
      </SkillsContianer>
    </>
  );
};
