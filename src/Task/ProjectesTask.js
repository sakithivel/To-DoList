import React from 'react'


function ProjectesTask() {
  const projects = [
    {
      title: "AMERN Stack Application",
      image: "",
      description:
        "A MERN Stack application used to manage hardware tools, track borrowed tools, and monitor return status.",
      tech: "React, Node.js, Express.js, MongoDB",
      link: "#"
    },
    {
      title: "AI Chatbot Project",
      image: "",
      description:
        "An AI-powered chatbot project designed to provide health-related information through a simple interface.",
      tech: "Python, Streamlit, AI",
      link: "#"
    },
    {
      title: "Python Internship",
      image: "",
      description:
        "Completed Python programming tasks and practiced data handling and data visualization during internship activities.",
      tech: "Python, Pandas, Matplotlib",
      link: "#"
    }
  ];

  return (
    <center>
    <div className="container">
      <h2>My Projects</h2>
      <p className="subtitle">
        Here are some of my projects and learning experiences.
      </p>

      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <p>{project.description}</p>

            <h4>Technologies Used</h4>
            <p className="tech">{project.tech}</p>

            <a href={project.link} className="button">
              View Project
            </a>
          </div>
        ))}
      </div>
  

    </div>
    </center>
  )
}

export default ProjectesTask
