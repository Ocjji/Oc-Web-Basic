import React from 'react';
import PlayerPosition from "./PlayerPosition";
import { PlayGroundStyle } from "../styled/PlayGroundStyle";
import { useSelector } from "react-redux";
import PlayerPositionNull from "./PlayerPositionNull";


const PlayGround = () => {
    const { currentSetData } = useSelector(state => state.playerR);
    return (
        <PlayGroundStyle className="playground">
            {
                currentSetData.map(item => item.no !== null ?
                    <PlayerPosition key={item.id} item={item} />
                    :
                    <PlayerPositionNull key={item.id} item={item} />)
            }

        </PlayGroundStyle>
    );
};

export default PlayGround;