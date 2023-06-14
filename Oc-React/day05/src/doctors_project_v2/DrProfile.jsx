import React from 'react';

const DrProfile = ({ selected_Dr }) => {
    const { name, position, profile } = selected_Dr;
    const { realname, desc } = profile;
    return (
        <div className="dr-profile">
            <strong>{name}</strong>
            <em>{realname}</em>
            <br />
            <br />
            <br />
            <b>{position}</b>
            <p>{desc}</p>
        </div>
    );
};

export default DrProfile;