import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import AlbumForm from './AlbumForm';

const CreateAlbum = () => {
    const navigate = useNavigate();

    const handleSubmit = (newAlbum) => {
        const endpoint = `${process.env.REACT_APP_API_URL}/album`;
        fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(newAlbum),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
            if (!response.ok) {
                console.error(response.statusText);
            } else {
                navigate('/albumoverview');
            }
        })
        .catch((error) => console.error('Error:', error));
    };

    return (
        <Container>
            <AlbumForm onSubmit={handleSubmit} />
        </Container>
    );
};

export default CreateAlbum;
