import React from 'react';
import {Button} from "@material-ui/core"
import  TicketIcon from "../../Asset/images/icons/ticket.png"

import "./mybutton.scss"

const Mybotton = (props) => {
    return (
        <Button
        className="button"
         href={props.link}
         variant="contained"
         size="small"
         style={{
             background: props.bck,
             color: props.color
         }}

        >
         <img src={TicketIcon} 
         alt="icon_Button"
         className="iconImage"
         />
          {props.text}
        </Button>    
    );
};

export default Mybotton;