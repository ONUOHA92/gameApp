import React from 'react';
import "./footer.scss"
import Fade from "react-reveal/Fade"

const Footer = () => {
    return (
        <Fade delay={500}>
            <footer className="bck_pink">
                <div className="footer_logo-venue">Votage Games Limited</div>
                 <div className="footer_copyright">
                     The votage 2020.All right reserved
                 </div>
            </footer>
        </Fade>



    );
};

export default Footer;