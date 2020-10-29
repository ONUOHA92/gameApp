import React from 'react';

import { Element } from "react-scroll"

import Navbar from '../components/header/Navbar';
import Featured from '../components/featured/Featured';
import ListGame from '../components/gameInfo/ListGame';
import HighLight from '../components/highlights/HighLight';
import Pricing from '../components/pricing/Pricing';
import Location from "../components/locaction/Location"
import Footer from '../components/footer/Footer';


const HomePage = () => {
    return (
        <div style={{  width: "100%"}}>
            <Navbar />

            <Element name="Featured">
                <Featured />
            </Element>

            <Element name="product">
                <ListGame />
            </Element>

            <Element name="highlight">
                <HighLight />
            </Element>


            <Element name="pricing">
                <Pricing />
            </Element>


            <Element name="location">
                <Location />
            </Element>

            <Footer />
        </div>
    );
};

export default HomePage;