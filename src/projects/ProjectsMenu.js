import React, { Component } from 'react'
import projects from './projectsData';
import classNames from 'classnames';
import "../styles/projectsMenu.css"

export default class ProjectsMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeProject: 1,
        };
    }

    handleProjectClick = (project) => {
        this.setState({
            activeProject: project,
        });
    };
    
    renderContent = (projects) => {
        return projects.map((project, index) => (
            <div key={index} className={`project-sub-container-${index + 1}
            `}>
                <h3>{project.title}</h3>
                <img src={project.image} alt={project.title}></img>
                <div>{project.description}</div>
                <div className="link-container">
                     <a href={project.github} target=" blank" rel="noopenernoreferrer">
                        GITHUB
                    </a>
                    <a href={project.github} target=" blank" rel="noopenernoreferrer">
                        DEMO
                    </a>
                </div>
            </div>
        ));
    };
    
    render() {

        const {activeProject} = this.state;
        const projectItems = ["PROJECT 1", "PROJECT 2", "PROJECT 3"];

        return (
          <div className="project-menu">
            <div className="project-items-container">
                {projectItems.map((item, index) => (
                    <div
                        key={index}
                        className={classNames("project-item", {
                            activeProject: activeProject === index + 1,
                        })}
                        onClick={() => this.handleProjectClick(index + 1)}
                    >
                        <h2 className="title">{item}</h2>
                    </div>
                ))}
            </div>
            <div className="project-sub-container">
                {this.renderContent([projects[activeProject]])}
            </div>
          </div>
        );
    }
}
