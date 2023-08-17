import React from "react";

const ProjectSection = () => {
    const projects = [  // Use lowercase "projects" here
        { title: "order-meal", description: 'Its an Order app that allows easy ordering of food with provided delivery for free' },
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
