import { BackgroundText } from '../../modules/BackgroundText';
import {
  ExperienceBox,
  ExperienceBoxContent,
  ExperienceBoxContentContainer,
  ExperienceBoxContentDescription,
  ExperienceBoxContentTitle,
  ExperienceBoxContentYear,
  ExperienceBoxFHeader,
  ExperienceBoxFirstSection,
  ExperienceBoxFTitle,
  ExperienceBoxFTitleContianer,
  ExperienceBoxSecondSection,
  ExperienceContainer,
} from './ExperienceView.styles';

export const ExperienceView: React.FC = () => {
  return (
    <>
      <ExperienceContainer id="experience">
        <BackgroundText>Experience</BackgroundText>
        <ExperienceBox>
          <ExperienceBoxFirstSection>
            <ExperienceBoxFHeader>Experience</ExperienceBoxFHeader>
            <ExperienceBoxFTitleContianer>
              <ExperienceBoxSecondSection>
                <ExperienceBoxFTitle>Work experience</ExperienceBoxFTitle>
                <ExperienceBoxContentContainer>
                  <ExperienceBoxContent>
                    <ExperienceBoxContentTitle>
                      MGT Merx
                    </ExperienceBoxContentTitle>
                    <ExperienceBoxContentYear>
                      Feb 2023 - Jan 2024
                    </ExperienceBoxContentYear>
                    <ExperienceBoxContentDescription>
                      Fullstack Web Developer (Python, React)
                    </ExperienceBoxContentDescription>
                  </ExperienceBoxContent>
                  <ExperienceBoxContent>
                    <ExperienceBoxContentTitle>
                      Ryanair Sun S.A
                    </ExperienceBoxContentTitle>
                    <ExperienceBoxContentYear>
                      2024-present
                    </ExperienceBoxContentYear>
                    <ExperienceBoxContentDescription>
                      Junior Cabin Crew
                    </ExperienceBoxContentDescription>
                  </ExperienceBoxContent>
                </ExperienceBoxContentContainer>
              </ExperienceBoxSecondSection>

              <ExperienceBoxSecondSection>
                <ExperienceBoxFTitle>Education</ExperienceBoxFTitle>
                <ExperienceBoxContentContainer>
                  <ExperienceBoxContent>
                    <ExperienceBoxContentTitle>
                      Adam Mickiewicz 1st General Secondary School, Stargard
                    </ExperienceBoxContentTitle>
                    <ExperienceBoxContentYear>
                      2019-2021
                    </ExperienceBoxContentYear>
                    <ExperienceBoxContentDescription>
                      Field: Mathematics and Physics
                    </ExperienceBoxContentDescription>
                  </ExperienceBoxContent>
                  <ExperienceBoxContent>
                    <ExperienceBoxContentTitle>
                      University of Lower Silesia, Wroclaw
                    </ExperienceBoxContentTitle>
                    <ExperienceBoxContentYear>
                      2022-present
                    </ExperienceBoxContentYear>
                    <ExperienceBoxContentDescription>
                      Field: Computer Science
                    </ExperienceBoxContentDescription>
                  </ExperienceBoxContent>
                </ExperienceBoxContentContainer>
              </ExperienceBoxSecondSection>
            </ExperienceBoxFTitleContianer>
          </ExperienceBoxFirstSection>
        </ExperienceBox>
      </ExperienceContainer>
    </>
  );
};
