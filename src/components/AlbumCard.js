import React from 'react';
import { Card, CardHeader, CardMedia } from '@mui/material';

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        id={id}
        title={name}
        subheader={artist}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt={`${name} cover`}
      />
    </Card>
  );
};

export default AlbumCard;
