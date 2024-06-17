import React from 'react';
import { Container, Grid } from '@mui/material';
import AlbumCard from './AlbumCard';
import useAlbums from '../hooks/useAlbums';

const AlbumOverview = () => {

  const albums = useAlbums();

  return (
    <Container>
      <Grid container spacing={4}>
        {albums.map((album) => (
          <Grid item xs={12} md={4} key={album.id}>
            <AlbumCard {...album}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AlbumOverview;
