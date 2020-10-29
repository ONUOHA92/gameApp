import React, { Component } from 'react';
import "./pricing.scss"
import Mybotton from '../utils/Mybotton';
import Zoom from "react-reveal/Zoom"

class Pricing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prices: [100, 150, 250],
            postions: ['Balcony', 'Medium', 'star'],
            disc: [
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, magni!',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, reiciendis!',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, tempore.'
            ],

            linkto: ['https://sales/b', 'https://sales/m', 'https://sales/s'],
            delay: [500, 0, 500]
        }

    }



    showButton = () => (
        this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state.delay}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.postions[i]}</span>
                        </div>

                        <div className="pricing_description">
                            {this.state.disc}
                        </div>

                        <div className="pricing_buttons">
                            <Mybotton
                                text="purchase"
                                bck="#FF2E63"
                                color="#fff"

                            />
                        </div>
                    </div>
                </div>
            </Zoom>

        ))
    )


    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                   <div className="pricing_wrapper">
                        {this.showButton()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;