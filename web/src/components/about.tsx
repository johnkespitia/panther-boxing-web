// About Me component
import {AboutProps} from "@/components/profile";
import React from "react";

const About: React.FC<AboutProps> = ({ summary }) => (
    <section  className="my-8">
        <h2  className="text-2xl font-bold mb-4">About Me</h2>
        <p  className="text-gray-700">{summary}</p>
    </section>
);

export default About