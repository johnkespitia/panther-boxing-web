import {Props} from "@/components/profile";
import profileData from "@/data/profileData";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Achievements from "@/components/achievements";
import Recommendations from "@/components/recomendation";
import Contact from "@/components/contact";

export default function Home() {
    const {
        summary,
        experiences,
        education,
        skills,
        projects,
        achievements,
        recommendations,
        email,
        phone,
        socialMediaLinks,
    }: Props = profileData;
  return (
      <div  className="container mx-auto bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
              <div className="col-span-1 md:col-span-2">
                  <div className="space-y-8">
          <About summary={summary} />
          <Experience experiences={experiences}/>
          <Education education={education} />

          <Projects projects={projects}/>
                  </div>
              </div>
              <div className="col-span-1">
                  <div className="space-y-8">
                      {achievements.length > 0 && <Achievements achievements={achievements}/>}
              <Skills skills={skills} title={"Skills"}/>
                      {recommendations.length > 0 && <Recommendations recommendations={recommendations}/>}
          <Contact
              email={email}
              phone={phone}
              socialMediaLinks={socialMediaLinks}
          />
                  </div>
              </div>
          </div>
      </div>
  )
}
