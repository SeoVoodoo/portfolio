import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Projects } from './layout/sections/projects/Projects';
import { LocationMap } from './layout/sections/map/LocationMap';
import { Services } from './layout/sections/services/Services';
import { Learning } from './layout/sections/learning/Learning';
import { Contact } from './layout/sections/contact/Contact';
import { Footer } from './layout/footer/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <LocationMap />
      <Services />
      <Learning />
      <Contact />
      <Footer />      
    </div>
  );
}

export default App;
