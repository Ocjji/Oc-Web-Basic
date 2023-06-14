import React from 'react';
import TabItem from './TabItem';

const TabList = ({ data, onShow }) => {
    return (
        <ul>
            {
                data.map(item => <TabItem key={item.id} item={item} onShow={onShow} />)
            }
        </ul>
    );
};

export default TabList;