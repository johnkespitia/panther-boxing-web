import {
  Props
} from "@/components/profile";

const profileData: Props = {
  altProfilePicture: "",
  name: "John Espitia",
  tagline: "Software Developer",
  profilePicture: "/images/profilePic.png",
  summary: "Software developer with 13 years of experience using PHP, Javascript, Golang, and more. I had worked on many projects for companies to improve their processes, and I had occupied important positions in these companies as Software Developer, Developer Team Leader, and TI Director.",
  experiences: [
    {
      title: "Software Engineer",
      company: "BairesDev LLC",
      description: `## [BairesDev LLC](https://bairesdev.com) 
#### [Covalto](https://Covalto.com) - Fullstack Developer / Team Lead
- Developed Website in React.JS, Redux, HTML, Javascript, CSS
- Developed Website using Strapi and Gatsby
- Develop and maintain the Design System
- Team lead Growth Squad
#### [Arivo Acceptance LLC](https://arivo.com/) - Backend Developer
- Developed Microservices using Golang
- Migrating internal libraries in the legacy microservices
#### Mentoring
- I gave mentoring in ReactJS, React Native, Golang, PHP, and Laravel`,
      period: "Jan 2021 - May 2023",
      skills: [
        "React.JS","Redux","Node.JS","Redux","RabbitMQ","Javascript","CSS","Typescript","Strapi","Gatsby","Sass","Golang","MySQL","MongoDB","GIT","Scrum","WebService"
      ],
    },
    {
      title: "Fullstack Engineer",
      company: "Dafiti",
      description: `### [Dafiti](https://dafiti.com.co)
- I developed a microservice in event-driven carrier selection using a rules engine in Golang (GinGonic, Gorm, GRULE), PostgreSQL and RabbitMQ
- I developed a microservice in event-driven for geolocation in Golang, MongoDB, and RabbitMQ
- I developed a FrontEnd App for the microservices using HTML, Javascript, CSS, React.JS, Redux, and Axios
- I support legacy apps developed in PHP (Zend Framework and Laravel), Javascript, HTML, CSS, and React.JS`,
      period: "Jan 2020 - Dec 2020",
      skills: [
        "PHP","HTML","React.JS","Laravel","Redux","RabbitMQ","Javascript","CSS","JQuery","Golang","MySQL","MongoDB","GIT","Scrum","WebService"
      ],
    },
    {
      title: "Fullstack Developer",
      company: "Quantum (4 Smart)",
      description: `### 4 Smart
Developed and supported a platform using Node.js and PHP. Configured Watson Assistant and developed flows for it. Managed MongoDB and MySQL databases. Developed applications using PHP, HTML, Javascript, Node.js, and Vue.js.`,
      period: "Mar 2019 - Nov 2019",
      skills: [
        "PHP","HTML","React.JS","Laravel","Redux","Javascript","CSS","JQuery","Watson Assistant","MySQL","MongoDB","GIT","Scrum","WebService"
      ],
    },
    {
      title: "Web Engineer",
      company: "Envioclick",
      description: `### [Envioclick](https://envioclick.com)
- Performed platform integrations for companies like Coordinadora, Fedex, DHL, 472, Servientrega and Mensajeros ASAP using PHP, HTML, CSS and Javascript
- Adapted the platform from Mexico to Colombia modifying many parts of the platform and using PHP, HTML, CSS, Javascript, Laravel and MySQL
- Performed integration with MercadoPago using PHP, HTML, CSS and Javascript`,
      period: "Apr 2018 - Jan 2019",
      skills: [
        "PHP","HTML","Vue.JS","Laravel","Javascript","CSS","JQuery","MySQL","GIT","Scrum","WebService"
      ],
    },
    {
      title: "Head of Technology",
      company: "Megaincentivos",
      description: `### [Megaincentivos](https://Megaincentivos.com)
#### Head of Technology
- Planning, Analysis requirements and developed e-commerce sites using CMS Joomla.
- Implemented and managed web services applications using AWS.
- Worked under the Scrum methodology.
- Employed Git for version control.
- Managed PostgreSQL and MySQL databases.
- Coordinate a team of developers and designers
- Support applications in Java, PostgreSQL, PHP, Yii Framework, HTML, MySQL, Javascript and CSS
#### Software Engineer
- Developed e-commerce sites using CMS Joomla, HTML, Javascript and CSS.
- Implemented and managed web services applications using AWS.
- Worked under the Scrum methodology.
- Employed Git for version control.
- Managed PostgreSQL and MySQL databases.`,
      period: "Mar 2015 - May 2016",
      skills: [
        "PHP","HTML","Yii Framework","Joomla","Java","PostgreSQL","AWS","MySQL","GIT","Scrum","WebService"
      ],
    },
    {
      title: "PHP Engineer",
      company: "Stefanini IT Solutions",
      description: `### [Stefanini IT Solutions](https://stefanini.com)
#### [Claro Colombia](https://claro.com.co) 
- Performed outsourcing developing functions for Claro Colombia.
- Developed an interoperability application to provide Claro home services
using PHP and connecting it to the Intraway API.
- Prepared coding and user documentation.
- Developed a suggestions, issues, claims or complaints application for Claro
also using PHP, Javascript, HTML, JQuery and CSS.
`,
      period: "Jun 2012 - May 2013",
      skills: [
        "PHP","HTML","Javascript","PostgreSQL","AWS","MySQL","WebService"
      ],
    },
    {
      title: "IT Analyst",
      company: "Servimos LTDA",
      description: `### [Servimos LTDA](https://servimos.com.co)
- Implemented applications to properly manage information.
- Verified the configuration and conditions required by the back-up generation system.
- Supported the management of the organization’s information resources according to its specific needs.
- Generated reports and specific inquiries according to clients’ needs. Performed preventive and corrective maintenance on databases MySQL and PostgreSQL.
- Supported a software to control the quality of web platforms using PHP, Javascript, HTML and CSS.
- Developed and supported a web application to perform internal control on staff requests from different clients using PHP, Javascript, CSS and HTML.
- Developed a management and product control application following ISO-9001-2008 using PHP, Zend Framework, Javascript, Dojo Toolkit, CSS and HTML.
- Installed, managed and customized LimeSurvey, Moodle, WordPress and MyBB applications.
`,
      period: "Jan 2010 - Jun 2012",
      skills: [
        "PHP","HTML","Javascript","Moodle","WordPress","MySQL","LimeSurvey"
      ],
    },
    {
      title: "IT Analyst",
      company: "Servidesarrollo LTDA",
      description: `### [Servimos LTDA](https://www.servidesarrollo.com/web/)
- Implemented applications to properly manage information. Verified the configuration and conditions required by the back-up generator system.
- Supported the management of information resources according to the
company’s needs.
- Generated reports and special inquiries according to clients’ needs.
- Performed corrective and preventive maintenance on databases.
- Supported a quality management system using PHP, HTML, Javascript and
CSS.
`,
      period: "Jun 2009 - Jan 2010",
      skills: [
        "PHP","HTML","Javascript","Moodle","WordPress","MySQL","LimeSurvey"
      ],
    },

  ],
  education: [
    {
      degree: "Software Engineer",
      institution: "Politecnico Grancolombiano",
      date: "2015 - ongoing",
    },
    {
      degree: "Software Developer",
      institution: "SENA",
      date: "2008 - 2010",
    },
  ],
  skills: ["PHP", "Golang", "NodeJS", "MySQL" ,"React.js", "Next.js", "JavaScript", "HTML", "CSS", "ChatGPT", "Google Bard", "Prompt Engineering"],
  projects: [
    {
      title: "Hero CRM",
      description: "CRM Software for small companies",
      technologies: "PHP, MySQL, Javascript",
      url: "https://hero-crm.com"
    },
    // Agrega más proyectos aquí
  ],
  achievements: [],
  recommendations: [],
  email: "jcespitia1@gmail.com",
  phone: "+573214357629",
  socialMediaLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/johnkespitia/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/johnkespitia_",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com/johnkespitia",
    },
    {
      name: "Github",
      url: "https://www.github.com/johnkespitia",
    },
    // Agrega más enlaces de redes sociales aquí
  ],
};

export default profileData;
