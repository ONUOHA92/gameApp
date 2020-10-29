import React from 'react';
import Description from "./Description"
import Discount from './Discount';

import "./highlight.scss"


const HighLight = () => {
    return (
        <div className="highlight_wrapper">
          <Description />
          <Discount /> 
        </div>
    );
};

export default HighLight;