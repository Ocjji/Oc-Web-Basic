import { memo, useCallback } from 'react';
import { GallerySearchForm } from '../styled/galleryStyle';
import { useInput } from "../../hooks/useInput";

const GallerySearch = memo(({ onSearch }) => {
    const { state, changeInput } = useInput({ text: '' });
    const { text } = state;

    const onSubmit = useCallback(e => {
        e.preventDefault();
        if (!text) return
        onSearch(text);
    }, [text]);

    return (
        <GallerySearchForm onSubmit={onSubmit}>
            <input type="text" value={text} name="text" onChange={changeInput} />
        </GallerySearchForm>
    );
});

export default GallerySearch;