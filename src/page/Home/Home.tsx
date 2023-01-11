import { CardsContainer } from './CardsContainer/CardsContainer';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Box } from '@mui/system';
import React from 'react';

export function Home() {
  return (
    <section>
      <Header />
      <Box mt={12} mb={2}>
        <CardsContainer />
      </Box>
      <Footer />
    </section>
  );
}
