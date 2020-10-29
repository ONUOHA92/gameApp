import React from 'react';
import Zoom from "react-reveal/Zoom"
import "./listgame.scss"

import DataInfo from "../datainfo/DataInfo"

const ListGame = () => {

    const DataList = DataInfo.map(data => (
        <div className="game-card-info">
            <img className="game_img" src={data.gameImg} width="200px" alt="" />
            <h3 style={{color: "#FF2E63"}}>{data.name}</h3>
            <p>{data.discription}</p>

        </div>
    ))

    return (

        <div className="game-info-wrapper">
            <div className="text-heading">
                our product
            </div>
            <Zoom  duration={1000} delay={1000}>
            <div className="game-card-container">
                {DataList}
            </div>
            </Zoom >
        </div>
          
       
    );
};

export default ListGame;