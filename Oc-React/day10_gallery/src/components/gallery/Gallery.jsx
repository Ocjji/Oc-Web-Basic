
import GallerySearch from './GallerySearch';
import GalleryList from './GalleryList';
import { Container } from '../styled/galleryStyle';
import { useAxios } from "../../hooks/useAxios";
import { useCallback, useState } from "react";



const Gallery = () => {
    const API_KEY = "36875440-c83fd8a4ba9fe6a2af99c35a6&q";
    const [text, setText] = useState('dog');
    const url = `https://pixabay.com/api/?key=${API_KEY}=${text}&image_type=photo`;
    const {data, loading, error} = useAxios(url);

    const onSearch = useCallback((text)=>{
        setText(text);
    },[text]);

    return (
        <Container width="1400">
            <GallerySearch onSearch={onSearch}/>
            {
                data && loading && <GalleryList data={data.hits}/>
            }                        
        </Container>
    );
};

export default Gallery;