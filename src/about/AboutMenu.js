import React, { Component } from 'react';
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import subheadingsData from "./subheadingsData";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";
import "../styles/aboutMenu.css";
import linkedinIcon from "../assets/linkedInIcon.png";
import githubIcon from "../assets/githubIcon.png";
import webIcon from "../assets/omni_app_icon.png";
import youtubeIcon from "../assets/youtubeIcon.png";
import csumbLogo from "../assets/csumbLogo.png";
import calLogo from "../assets/calLogo.png"; 





export default class AboutMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenuItem: 1,
            activeSubheading: 1,
        };
    }

    handleMenuItemClick = (menuItem) => {
        this.setState({
            activeMenuItem: menuItem,
            activeSubheading: 1,
        });
    };

    handleSubheadingClick = (subheading) => {
        this.setState({
            activeSubheading: subheading,
        });
    };

    render() {
        const { activeMenuItem, activeSubheading } = this.state;
        const menuItems = ["PERSONAL", "EDUCATION", "CAREER"];
        const activeMenuTitle = menuItems[activeMenuItem - 1];
        const activeMenuIcon = 
            activeMenuTitle === "PERSONAL" ? personalIcon : activeMenuTitle === "EDUCATION" ? educationIcon : careerIcon;

        const subheadings = subheadingsData[activeMenuItem];

        return (
            <>
                <div className="menu">
                    {menuItems.map((item, index) => (
                        <AboutMenuItem
                            key={index}
                            title={item}
                            active={activeMenuItem === index + 1}
                            onClick={() => this.handleMenuItemClick(index + 1)}
                        />
                    ))}
                </div>
                <div className="sub-container">
                    <div className="icon-title-container">
                        <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
                        <h3>{activeMenuTitle}</h3>

                        {/* Conditionally render the school logo next to the title if activeMenuItem is EDUCATION */}
                        {activeMenuTitle === "EDUCATION" && (
                            <img src={calLogo} alt="School Logo" className="school-logo" />
                        )}
                    </div>
                    {subheadings.map((subheading, index) => (
                        <AboutSubheading
                            key={index}
                            title={subheading.title}
                            content={subheading.content}
                            active={activeSubheading === index + 1}
                            onClick={() => this.handleSubheadingClick(index + 1)}
                            menuItem={activeMenuItem}
                        />
                    ))}
                    {/* Conditionally render icons if the active menu item is "PERSONAL" */}
                    {activeMenuTitle === "PERSONAL" && (
                        <div className="icon-links">
                            <a href="https://www.omniabx.com" target="_blank" rel="noopener noreferrer">
                                <img src={webIcon} alt="Website" />
                            </a>
                            <a href="https://github.com/omarubilla" target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/ubilla-kevin-omni/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinIcon} alt="LinkedIn" />
                            </a>
                            <a href="https://www.youtube.com/@omarubilla7748/videos" target="_blank" rel="noopener noreferrer">
                                <img src={youtubeIcon} alt="Youtube" />
                            </a>
                        </div>
                    )}
                </div>
            </>
        );
    }
}
