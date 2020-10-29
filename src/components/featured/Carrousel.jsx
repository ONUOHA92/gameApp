import React from 'react';
import Slider from 'react-slick'

import carrousel_six from "../../Asset/images/carrousel_six.jpeg"
import carrousel_two from "../../Asset/images/carrousel_two.jpeg"
import carrousel_three from "../../Asset/images/carrousel_three.jpeg"

import "./carrousel.scss"

const Carrousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: "hidden"
            }}
        >

            <Slider {...settings}>
                <div>
                    <div className="carrousel_image"
                        style={{
                            background: `url(${carrousel_six})`,
                            height: `${window.innerHeight}px`,
                            width: "100vw"
                        }}
                    >

                    </div>
                </div>

                <div>
                    <div className="carrousel_image"
                        style={{
                            background: `url(${carrousel_two})`,
                            height: `${window.innerHeight}px`,
                            width: "100vw"
                        }}
                    >

                    </div>
                </div>

                <div>
                    <div className="carrousel_image"
                        style={{
                            background: `url(${carrousel_three})`,
                            height: `${window.innerHeight}px`,
                            width: "100vw"
                        }}
                    >

                    </div>
                </div>





            </Slider>







        </div>
    );
};

export default Carrousel;