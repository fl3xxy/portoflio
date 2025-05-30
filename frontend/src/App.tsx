import { GlobalStyles } from './GlobalStyles.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.ts';

//modules
import { Navbar } from './components/modules/Navbar/Navbar.tsx';

//views
import { LandingView } from './components/views/LandingView/LandingView.tsx';
import { ProjectsView } from './components/views/ProjectsView/ProjectsView.tsx';
import { ExperienceView } from './components/views/ExperienceView/ExperienceView.tsx';
import { SkillsView } from './components/views/SkillsView/SkillsView.tsx';
import { ContactView } from './components/views/ContactView/ContactView.tsx';
import { Footer } from './components/modules/Footer/Footer.tsx';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <LandingView />
        <ProjectsView />
        <ExperienceView />
        <SkillsView />
        <ContactView />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
