import { useEffect, useState } from 'react';
import { getAllVideoGames } from '../../../services';
import { CardVideoGame } from '../CardVideoGames/CardVideoGame';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { Games } from '../../../models/index';
import { adapterVideoGames } from '../../../adapters';
import React from 'react';

export function CardsContainer() {
  const [allVideoGames, setAllVideoGames] = useState<Array<Games>>([]);
  useEffect(() => {
    getAllVideoGames(1, 10)
      .then((res) => adapterVideoGames(res))
      .then((res) => {
        setAllVideoGames(res);
        console.log(res, Array.isArray(res));
      });
  }, []);
  return (
    <Container>
      <Grid container spacing={2}>
        {allVideoGames &&
          allVideoGames.map((el) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={el.id}>
              <CardVideoGame name={el.name} image={el.image} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
