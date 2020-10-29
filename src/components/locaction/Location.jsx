import React from 'react';
import './location.scss'

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe title='lagos map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3
            !1d63424.34632790684!2d3.276092206006478!3d6.518943420215235!2m3!
            1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e6f4345b54d%3A0
            xed035f8c6abc49c5!2sOshodi-Isolo%2C%20Lagos!5e0!3m2!1sen!2sng!
            4v1603912124337!5m2!1sen!2sng"
             width="100%"
                height="500" 
                frameBorder="0"
                allowFullscreen="" 
                aria-hidden="false"
                tabindex="0">

                </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;