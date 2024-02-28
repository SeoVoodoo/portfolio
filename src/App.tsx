import './App.css';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/Theme.styled';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Projects } from './layout/sections/projects/Projects';
import { LocationMap } from './layout/sections/map/LocationMap';
import { Services } from './layout/sections/services/Services';
import { Learning } from './layout/sections/learning/Learning';
import { Contact } from './layout/sections/contact/Contact';
import { Footer } from './layout/footer/Footer';
import { useEffect, useState } from 'react';
import { Skills } from './layout/sections/skills/Skills';
import { Particle } from './conponents/particle/Particle';
import { GoTopBtn } from './conponents/goTopBtn/GoTopBtn';

function App() {
  const [themeName, setThemeName] = useState('light');

  function handleToggleTheme(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>){
    e.preventDefault();
    if(themeName === 'light'){
      window.localStorage.setItem('themeName', 'dark');
      setThemeName('dark');
    }
    else {
      window.localStorage.setItem('themeName', 'light');
      setThemeName('light');
    }            
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeName');
    localTheme && setThemeName(localTheme);
  }, []);

  return (
    <ThemeProvider theme={themeName === 'light' ? myTheme.light : myTheme.dark}>
      <>
        <GlobalStyles />
        <Particle />
        <Header 
          handleToggleTheme = {handleToggleTheme}
        />
        <About 
          // themeName = {themeName}
          // setThemeName = {setThemeName}
        />
        <Skills />
        <Projects />
        <LocationMap />
        <Services />
        <Learning />
        <Contact />
        <Footer /> 
        <GoTopBtn />
      </>     
    </ThemeProvider>
  );
}

export default App;