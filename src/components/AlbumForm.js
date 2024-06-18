import React from 'react';
import { Card, CardContent, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const AlbumForm = ({ album, onSubmit }) => {
    const { handleSubmit, control } = useForm({
        defaultValues: album || {
            name: "",
            artist: "",
            imageUrl: "",
        },
    });

    const showSubmitButton = !album;

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
                        margin="normal"
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
                        margin="normal"
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
                        margin="normal"
                    />

                    {showSubmitButton && ( // Conditionally render the submit button
                            <button type="submit">Submit</button>
                        )}

                </form>

            </CardContent>
        </Card>
    );
};

export default AlbumForm;