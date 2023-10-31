import React from "react";
import {SkillsProps} from "@/components/profile";

const Skills: React.FC<SkillsProps> = ({ skills , title}) => (
    <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <ul className="flex flex-wrap">
            {skills.map((skill, index) => (
                <li key={index} className="bg-gray-200 rounded-full py-2 px-4 text-gray-700 mr-2 mb-2">
                    {skill}
                </li>
            ))}
        </ul>
    </section>
);

export default Skills