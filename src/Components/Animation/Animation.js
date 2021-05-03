import React from 'react';
import './Animation.css'

const Animation = () => {
    return (
        <div>
            <div class="wrapper">
                <div class="static-txt">I'm a</div>
                <ul class="dynamic-txts">
                    <li><span>Designer</span></li>
                    <li><span>Developer</span></li>
                    <li><span>Freelancer</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Animation;