import React from 'react';
import { Card, CardContent, TextField, Button } from '@mui/material';

const AlbumForm = ({ album }) => {
  const [formData, setFormData] = React.useState({
    name: album ? album.name : '',
    artist: album ? album.artist : '',
    imageUrl: album ? album.imageUrl : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Album Name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="artist"
            label="Artist"
            value={formData.artist}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="imageUrl"
            label="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AlbumForm;
