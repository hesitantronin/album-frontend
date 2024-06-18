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
        </Container>
    );
    }

export default AlbumDetail;