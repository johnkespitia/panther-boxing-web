'use client'
import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { ExperienceProps, Experience } from "@/components/profile";
import Skills from "@/components/skills";

function LinkRenderer(props: any) {
    return (
        <a href={props.href} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    );
}

const ExperienceAccordion: React.FC<Experience> = ({ title, company, description, period,skills }) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div className="mb-4">
            <button
                className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-left bg-gray-200 rounded-md focus:outline-none"
                onClick={() => setExpanded(!expanded)}
            >
                <div>
                    <h3>{title}</h3>
                    <h4 className="text-gray-500">{company}</h4>
                    <p className="mt-2 text-sm text-gray-500">{period}</p>
                </div>
                <svg
                    className={`w-5 h-5 transition-transform duration-300 transform ${
                        expanded ? 'rotate-180' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            {expanded && (
                <div className="px-4 pt-2 pb-4">
                    <ReactMarkdown remarkPlugins={[gfm]} components={{ a: LinkRenderer }} className="markdown-text" >{description}</ReactMarkdown>
                    <Skills skills={skills} title={"Skills used"} />
                </div>
            )}
        </div>
    );
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
    return (
        <section className="mt-8">
            <h2 className="text-xl font-bold">Experience</h2>
            {experiences.map((experience, index) => (
                <ExperienceAccordion key={index} {...experience} />
            ))}
        </section>
    );
};

export default Experience;
