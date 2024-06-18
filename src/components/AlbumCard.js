import React from 'react';
import { Card, CardHeader, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  return (
    <Link to={`/albumdetail/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
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
    </Link>
  );
};

export default AlbumCard;
