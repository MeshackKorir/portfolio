import React from "react";

const ProjectSection = () => {
    const projects = [  // Use lowercase "projects" here
        { title: 'Project 1', description: 'Description of project 1' },
        { title: 'Project 2', description: 'Description of project 2' }, 
    ];

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
