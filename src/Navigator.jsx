import React from 'react';
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
            <a key="logs" href="#logs">Logs</a>,
            <a key="lumber" href="#lumber">Lumber</a>,
            <a key="woodchips" href="#woodchips">Woodchips</a>,
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
                Hi
            </button>
        );
        return (
            <nav className="valley-navigator">
                <div className="nav-container">
                    <img src="logo.jpg" alt="Valley Sawmill Logo" />
                    {hamburger}
                </div>
                <div className={`link-holder ${shouldExpand ? 'expanded' : ''}`}>
                    {links}
                </div>
            </nav>
        )
    };
};