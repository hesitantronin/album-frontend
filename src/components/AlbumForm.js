import React, { useState } from 'react';
import { Card, CardContent, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const AlbumForm = ({ album, onSubmit, onRemove }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: album || {
      name: '',
      artist: '',
      imageUrl: '',
    },
  });

  const [albumData, setAlbumData] = useState(album || { name: '', artist: '', imageUrl: '' });

  const handleFormSubmit = (formData) => {
    onSubmit(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAlbumData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                margin="normal"
                fullWidth
                value={albumData.name}
                onChange={handleInputChange}
              />
            )}
          />
          <Controller
            name="artist"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Artist"
                variant="outlined"
                margin="normal"
                fullWidth
                value={albumData.artist}
                onChange={handleInputChange}
              />
            )}
          />
          <Controller
            name="imageUrl"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Image URL"
                variant="outlined"
                margin="normal"
                fullWidth
                value={albumData.imageUrl}
                onChange={handleInputChange}
              />
            )}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
          {onRemove && (
            <Button
              variant="contained"
              color="secondary"
              onClick={onRemove}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default AlbumForm;
