import React from "react";
import {AchievementsProps} from "@/components/profile";

const Achievements: React.FC<AchievementsProps> = ({ achievements }) => (
    <section className="mt-8">
        <h2 className="text-xl font-bold mb-2">Achievements and Awards</h2>
        <ul className="list-disc ml-4">
            {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
            ))}
        </ul>
    </section>
);

export default Achievements