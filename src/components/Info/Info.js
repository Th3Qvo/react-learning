import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';


const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} imageBGI={settings.info.image} />
    <p>{settings.info.infoContent}</p>
  </Container>
);

export default Info;