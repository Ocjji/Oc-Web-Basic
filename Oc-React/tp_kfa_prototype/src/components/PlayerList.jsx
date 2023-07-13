import React from 'react';
import PlayerItem from "./PlayerItem";
import { PlayerListStyle } from "../styled/PlayerList";
import { useSelector } from "react-redux";

const PlayerList = () => {
    const { playerData, selectPosition } = useSelector(state => state.playerR);
    return (
        <>
            {selectPosition && <PlayerListStyle>
                {
                    playerData.map(item => <PlayerItem key={item.pid} item={item} />)
                }
            </PlayerListStyle>
            }
        </>
    );
};

export default PlayerList;