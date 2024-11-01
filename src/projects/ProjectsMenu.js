import React, { Component } from 'react'
import projects from './projectsData';
import classNames from 'classnames';
import "../styles/projectsMenu.css"

export default class ProjectsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeProject: 1,
            currentMediaIndex: 0,  // Track the current media index
        };
    }

    handleProjectClick = (project) => {
        this.setState({
            activeProject: project,
            currentMediaIndex: 0,  // Reset media index when changing projects
        });
    };

    handleNextMedia = (project) => {
        this.setState((prevState) => ({
            currentMediaIndex: (prevState.currentMediaIndex + 1) % project.media.length
        }));
    };

    renderContent = (projects) => {
        const { currentMediaIndex } = this.state;
        
        return projects.map((project, index) => (
            <div key={index} className={`project-sub-container-${index + 1}`}>
                <h3>{project.title}</h3>
                
                {/* Display current media based on the currentMediaIndex */}
                {(project.media && project.media[currentMediaIndex].endsWith(".MP4")) || (project.media && project.media[currentMediaIndex].endsWith(".MOV")) || (project.media && project.media[currentMediaIndex].endsWith(".mp4")) ? (
                    <video controls width="100%" src={project.media[currentMediaIndex]} />
                ) : (
                    <img src={project.media[currentMediaIndex]} alt={project.title} />
                )}
                
                <button onClick={() => this.handleNextMedia(project)}>Next</button>
                
                <div>{project.description}</div>
                
                {/* Conditionally render links based on project title */}
                <div className="link-container">
                    {project.title === "Elis XR: Gamified Fitness" && project.appstoreLink && (
                        <a href={project.appstoreLink} target="_blank" rel="noopener noreferrer">
                            Appstore Download
                        </a>
                    )}
                    {project.title === "Verzes AI Headphones" && (
                        <>
                            {project.websiteLink && (
                                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                                    Website
                                </a>
                            )}
                            {project.devpostLink && (
                                <a href={project.devpostLink} target="_blank" rel="noopener noreferrer">
                                    DevPost
                                </a>
                            )}
                            {project.youtubeLink && (
                                <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer">
                                    YouTube
                                </a>
                            )}
                        </>
                    )}
                    {project.title !== "Elis XR: Gamified Fitness" && project.title !== "Verzes AI Headphones" && (
                        <>
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    Demo
                                </a>
                            )}
                        </>
                    )}
                </div>
            </div>
        ));
    };

    render() {
        const { activeProject } = this.state;
        const projectItems = ["IoT Device", "Mobile Apps", "Painting", "Construction", "Console Games", "Published Books"];

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
