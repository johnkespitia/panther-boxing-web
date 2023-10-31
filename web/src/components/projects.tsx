import React from "react";
import {ProjectsProps} from "@/components/profile";

const Projects: React.FC<ProjectsProps> =  ({ projects }) => (
    <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        {projects.map((project, index) => (
            <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <p className="text-gray-700">Technologies used: {project.technologies}</p>
                {project.url && <p className="text-gray-700">Website: <a className={"text-blue-500 hover:text-blue-700 hover:shadow"} href={project.url}>{project.url}</a></p>}
            </div>
        ))}
    </section>
);

export default Projects