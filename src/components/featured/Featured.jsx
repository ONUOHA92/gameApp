import React from 'react';
import Carrousel from "./Carrousel"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import "./featured.scss"
import CountDown from './CountDown';

const Featured = () => {
    return (
        <div style={{ position: "relative" }}>

            <Carrousel />

            <div className="game_name">
                <div className="game_wrapper">
                    <span className="span_banner" style={{ color: "#FF2E63", padding: "5px" }}>choose</span>the best game <span className="span_banner" style={{ color: "#FF2E63" }}>from here </span>

                    <div className="buuton">
                        <Link to="/register" >
                            <Button style={{
                                backgroundColor: "#FF2E63",
                                color: "white"
                            }} >
                                Play Now
                      </Button>
                        </Link>
                    </div>

                </div>
            </div>
            
            <CountDown />
        </div>
    );
};

export default Featured;