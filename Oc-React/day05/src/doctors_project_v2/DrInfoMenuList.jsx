import React from 'react';
import DrInfoMenuItem from "./DrInfoMenuItem";

const DrInfoMenuList = ({ drinfomenulist, onSelectInfo }) => {
    return (
        <ul className="info-menu-list">
            {drinfomenulist.map(item => <DrInfoMenuItem key={item.infoID} item={item} onSelectInfo={onSelectInfo} />)}
        </ul>
    );
};

export default DrInfoMenuList;