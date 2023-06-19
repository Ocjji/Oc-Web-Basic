import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import GalleryItem from "./GalleryItem";

const GalleryListContainer = styled.div`
    .my-masonry-grid {
        display: -webkit-box; /* Not needed if autoprefixing */
        display: -ms-flexbox; /* Not needed if autoprefixing */
        display: flex;
        margin-left: -30px; /* gutter size offset */
        width: auto;
    }

    .my-masonry-grid_column {
        padding-left: 30px; /* gutter size */
        background-clip: padding-box;
    }

    /* Style your items */
    .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
        background: grey;
        margin-bottom: 30px;
    }
`;

const GalleryList = ({ data }) => {
    return (
        <GalleryListContainer>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}
                {
                    data.map(item => <GalleryItem key={item.id} item={item} />)
                }
            </Masonry>
        </GalleryListContainer>
    );
};

export default GalleryList;