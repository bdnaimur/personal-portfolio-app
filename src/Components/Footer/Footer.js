import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="copyRight text-center mt-5">
                    <button className="btn-info mb-3"><a className="text-warning" target="_blank" href="https://drive.google.com/file/d/1dt271vOquMXx8cB0W6by2oqkiKBclxdX/view?usp=sharing">Download CV</a></button>
                    <p className="text-info">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;