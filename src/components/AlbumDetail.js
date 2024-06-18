import { React } from 'react';
import { Link } from 'react-router-dom';
import useAlbum from '../hooks/useAlbum';
import AlbumForm from './AlbumForm';

const AlbumDetail = () => {

    const album = useAlbum();

    return (
        <AlbumForm {...album} />
    );
    }

export default AlbumDetail;