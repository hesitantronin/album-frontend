import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const useAlbum = () => {
    const { id } = useParams();
    const [album, setAlbum] = useState([]);

    useEffect(() => {
        const endpoint = `${process.env.REACT_APP_API_URL}/album/${id}`;
        const request = fetch(endpoint);

        request
            .then((apiResponse) => {
                if (!apiResponse.ok) {
                    console.error(apiResponse.statusText);
                    return;
                }

                return apiResponse.json();
            })
            .then((apiResult) => {
                setAlbum(apiResult);
            });
    }, [id]);

    return album;
}

export default useAlbum;

