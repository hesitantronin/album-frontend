import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import useAlbum from '../hooks/useAlbum';
import AlbumForm from './AlbumForm';
import { Container } from '@mui/material';

const AlbumDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const album = useAlbum();

    const updateAlbum = (updatedAlbum) => {
        const endpoint = `${process.env.REACT_APP_API_URL}/album/${id}`;
        fetch(endpoint, {
            method: 'PUT',
            body: JSON.stringify(updatedAlbum),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
            if (!response.ok) {
                console.error(response.statusText);
            } else {
                console.log('Album updated successfully');
                navigate('/albumoverview');
            }
        })
        .catch((error) => console.error('Error:', error));
    };

    const removeAlbum = () => {
        const endpoint = `${process.env.REACT_APP_API_URL}/album/${id}`;
        fetch(endpoint, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
            if (!response.ok) {
                console.error(response.statusText);
            } else {
                console.log('Album deleted successfully');
                navigate('/albumoverview');
            }
        })
        .catch((error) => console.error('Error:', error));
    };

    return (
        <Container>
            <AlbumForm album={album} onSubmit={updateAlbum} onRemove={removeAlbum} />
            <Link to="/albumoverview">Back to overview</Link>
        </Container>
    );
};

export default AlbumDetail;
