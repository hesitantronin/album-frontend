import React, { useEffect } from 'react';
import { Card, CardContent, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const AlbumForm = ({ album, onSubmit, onRemove }) => {
    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            name: "",
            artist: "",
            imageUrl: "",
        },
    });

    useEffect(() => {
        if (album) {
            reset(album);
        }
    }, [album, reset]);

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
                                {...field}
                                id="name"
                                label="Name"
                                variant="filled"
                                fullWidth
                                margin="normal"
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
                                id="artist"
                                label="Artist"
                                variant="filled"
                                fullWidth
                                margin="normal"
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
                                id="imageUrl"
                                label="Album cover"
                                variant="filled"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />

                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Submit
                    </Button>
                    {onRemove && (
                        <Button
                            type="button"
                            variant="contained"
                            color="secondary"
                            style={{ marginTop: '20px', marginLeft: '20px' }}
                            onClick={onRemove}
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
