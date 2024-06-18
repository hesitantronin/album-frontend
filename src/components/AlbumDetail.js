import { React } from 'react';
import { Link } from 'react-router-dom';
import useAlbum from '../hooks/useAlbum';
import  AlbumForm  from './AlbumForm';
import { Container } from '@mui/material';

const AlbumDetail = () => {

    const album = useAlbum();

    return (
        <Container>
            <AlbumForm album={album} />
            <Link to="/albumoverview">Back to overview</Link>
            <h1>Album Detail</h1>
            <h1>{album.name}</h1>
            <h2>{album.artist}</h2>
            <img src={album.imageUrl} alt={album.name} />
        </Container>
    );
    }

export default AlbumDetail;