import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import AlbumCard from './AlbumCard';
import useAlbums from '../hooks/useAlbums';

const AlbumOverview = () => {
  const albums = useAlbums();

  return (
    <Container>
      <Button
        component={Link}
        to="/new"
        variant="contained"
        color="primary"
        style={{ marginBottom: '20px' }}
      >
        Add New Album
      </Button>
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
