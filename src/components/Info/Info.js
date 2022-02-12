import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';


const Info = () => (
  <Container>
    <Hero titleText={settings.compInfo.title} imageBGI={settings.compInfo.image} />
    <p>{settings.compInfo.infoContent}</p>
  </Container>
);

export default Info;