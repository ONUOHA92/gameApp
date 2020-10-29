import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Slide from "react-reveal/Slide"

import MyButton from "../utils/Mybotton"

import "./discount.scss"


class Discount extends Component {


    constructor() {
        super();
        this.state = {
            discountStart: 0,
            discountEnd: 30

        }
    }


    percentage = () => {
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.percentage()
        },30)
    }



    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => this.percentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>



                    <Slide right>
                        <div className="discount_description">
                            <h3>purchase Ticket before 20th Nov</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur 
                                mollitia omnis culpa repellendus vero temporibus, blanditiis explicabo 
                                nesciunt placeat accusantium ab, earum hic cupiditate fugiat suscipit incidunt
                                 , amet ullam commodi.</p>
                                

                           <MyButton 
                           className="button" 
                             text="purchase ticket"
                             link="https://google.com"
                             bck="#FF2E63"
                             color="#fff"
                           />

                        </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;