import React from 'react';
import "./description.scss"
import Fade from 'react-reveal/Fade'

const Description = () => {
    return (
        <Fade>
            <div className="center_wrapper">
                <h2>Highlights</h2>
                <div className="highlight_description">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                      fugit autem veritatis fuga sunt, nihil soluta facilis perferendis officiis eos
                      facere magni quod. Id deserunt ipsa eveniet doloribus temporibus recusandae, 
                      consequuntur laudantium dolor tempora sint est aut magni distinctio ullam 
                      repellendus vitae at accusamus ipsum debitis ducimus ex, praesentium ut.
                  </div>
            </div>
        </Fade>
    );
};

export default Description;