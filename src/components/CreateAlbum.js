import React from 'react';
import AlbumForm from './AlbumForm';
import { useNavigate } from 'react-router-dom';

const CreateAlbum = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    fetch(`${process.env.REACT_APP_API_URL}/albums`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => navigate('/'))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <AlbumForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateAlbum;
