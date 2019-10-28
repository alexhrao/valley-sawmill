import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Navigator.css';
import isMobile from './isMobile';

export default class Navigator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
        };
    }
    render() {
        const { isExpanded } = this.state;
        const shouldExpand = isExpanded || !isMobile();
        const links = [
            <a key="woodchips" href="#woodchips">Woodchips</a>,
            <a key="logs" href="#logs">Logs</a>,
            <a key="lumber" href="#lumber">Lumber</a>,
            <a key="equipment" href="#equipment">Equipment</a>,
            <a key="contact" href="#contact">Contact</a>,
            <a key="about" href="#about">About</a>,
        ];
        const hamburger = !isMobile() ? null : (
            <button
                type="button"
                className="hamburger"
                onClick={() => {
                    this.setState({isExpanded: !isExpanded});
                }}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
        );
        const phone = isMobile() ? null : <p className="contact-phone"><strong><FontAwesomeIcon icon={faPhoneAlt} /></strong> <a href="tel:+19075633436">+1 (907) 563-3436</a></p>;
        return (
            <nav className="valley-navigator">
                <div className="nav-container">
                    <img src="logo.jpg" alt="Valley Sawmill Logo" />
                    {hamburger}
                    {phone}
                </div>
                <div className={`link-holder ${shouldExpand ? 'expanded' : ''}`}>
                    {links}
                </div>
            </nav>
        )
    };
};