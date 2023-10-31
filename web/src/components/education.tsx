// Education component
import React from "react";
import {EducationProps} from "@/components/profile";

const Education: React.FC<EducationProps> = ({ education }) => (
    <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        {education.map((edu, index) => (
            <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <h4 className="text-lg text-gray-600">{edu.institution}</h4>
                <p className="text-gray-700">{edu.date}</p>
            </div>
        ))}
    </section>
);

export default Education