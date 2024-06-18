import React from 'react';
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

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Name"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
          />
          <Controller
            name="artist"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Artist"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
              />
            )}
          />
          <Controller
            name="imageUrl"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                label="Image URL"
                variant="outlined"
                {...field}
                margin="normal"
                fullWidth
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
