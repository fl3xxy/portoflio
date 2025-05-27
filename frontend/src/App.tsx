import { GlobalStyles } from './GlobalStyles.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.ts';

//modules
import { Navbar } from './components/modules/Navbar/Navbar.tsx';

//views
import { LandingView } from './components/views/LandingView/LandingView.tsx';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <LandingView />
      </ThemeProvider>
    </>
  );
}

export default App;
