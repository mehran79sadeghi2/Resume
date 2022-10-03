import React from 'react';
import Page from '../../shared-components/Page';
import Educations from './components/Educations';
import Experiences from './components/Experiences';
import Hero from './components/Hero';
import MetaTags from './components/MetaTags';

function Home() {
  return (
    <Page>
      <MetaTags />
      <Hero />
      <Experiences />
      <Educations />
    </Page>
  );
}

export default Home;
