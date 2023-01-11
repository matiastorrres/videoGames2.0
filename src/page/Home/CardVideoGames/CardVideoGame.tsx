import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardHeader } from '@mui/material';
import React from 'react';
interface props {
  name: string;
  image: string;
}
export function CardVideoGame({ name, image }: props) {
  return (
    <Card sx={{ height: 300 }}>
      <CardMedia component="img" height="200" image={image} alt={image} />
      <CardHeader title={name} />
    </Card>
  );
}
