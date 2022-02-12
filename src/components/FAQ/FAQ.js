import React from 'react';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={settings.FAQ.title} imageBGI={settings.FAQ.image} />
    <p>{settings.FAQ.questions}</p>
    <p>{settings.FAQ.answers}</p>
  </Container>
);

export default FAQ;