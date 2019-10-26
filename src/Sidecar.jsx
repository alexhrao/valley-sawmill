import React from 'react';
import './Sidecar.css';

const Sidecar = () => {
    let content = null;
    if (window.innerWidth > 768) {
        content = (
            <React.Fragment>
                <p>Call us now!</p>
                <a href="tel:+19186291990">+1 (918) 629-1990</a>
            </React.Fragment>
        );
    } else {
        content = (
            <a href="tel:+19186291990">Call Now</a>
        )
    }
    return (
        <div className="sidecar">
            {content}
        </div>
    )
};

export default Sidecar;