import { memo } from 'react';
import { GalleryItemBox } from '../styled/galleryStyle';

const GalleryItem = memo(({item}) => {
    const {id, user, views, downloads, likes, tags, largeImageURL} =item;
    return (
        <GalleryItemBox>
            <img src= {largeImageURL} alt="" />
            <h2>{user}</h2>
            <ul>
                <li>조회수 : {views.toLocaleString('ko-KR')}  </li>
                <li>다운로드 : {downloads.toLocaleString('ko-KR')}  </li>
                <li>좋아요 : {likes.toLocaleString('ko-KR')}  </li>
            </ul>
            <p>
                {tags}
            </p>
        </GalleryItemBox>
    );
}) ;

export default GalleryItem;