import Skills from '../Skills';

const experiences = [/* {
        position: "Senior Web Developer",
        company: "Freelancer",
        from: "01/01/2007",
        to: "",
        presentDay: true,
        remote: true,
        showOnlyCountry: true,
        country: "",
        state: "",
        city: "",
        tasks: "I've, for the last 5 years, worked as a Frontend Developer, but the last 3 of that 5, I've mainly worked as a Frontend React Developer, I've also developed the necessary skillset so I can work as a Backend Developer as well. Javascript, React, Redux, VueJS, SASS/CSS, HTML5, PHP, Laravel, NodeJS+ExpressJS, NextJS, Apollo, Yoga, GraphQL, SQL and NoSQL Databases are my top, current, skill areas.",
        uuid: ""
    }, */
    {
        position: "Frontend React Developer",
        company: "Meru.com",
        from: "26/04/2021",
        to: "",
        presentDay: true,
        remote: true,
        showOnlyCountry: true,
        country: "Mexico",
        state: "",
        city: "Ciudad de México and Merida, Yucatan",
        tasks: "I Develop solutions and features for a CRM to administrate the demand and the supply of the website with React using NextJS with TailwindCSS, I lead some features for the platform.",
        uuid: ""
    },
    {
        position: "Technical Lead and Web Developer",
        company: "New Seeds",
        from: "01/02/2021",
        to: "01/04/2021",
        presentDay: false,
        remote: true,
        showOnlyCountry: true,
        country: "Chile",
        state: "",
        city: "Santiago",
        tasks: "I Lead and change the way to Develop in PHP, Implementation of Laravel and VueJS to create a better CRM to attend clients in restaurants trough a mobile application",
        uuid: ""
    },
    {
        position: "Frontend React Developer, With backend background",
        company: "Phinx - Software Labs",
        from: "01/09/2020",
        to: "01/02/2021",
        presentDay: false,
        remote: true,
        showOnlyCountry: true,
        country: "Argentina",
        state: "",
        city: "Buenos Aires",
        tasks: "I develop code in react with Material UI to create a CRM to maintain the warehouse of the hardware division of the company",
        uuid: ""
    },
    {
        position: "Frontend React Developer, React Native Developer",
        company: "Tigy",
        from: "10/01/2019",
        to: "01/07/2020",
        presentDay: true,
        remote: true,
        showOnlyCountry: true,
        country: "Ecuador",
        state: "",
        city: "Quito",
        tasks: "I Connect the API and make layouts modifications in the frontend for a WebApp, and also Connect the API with the mobile app for the same Application in React Native",
        uuid: ""
    },
    {
        position: "Frontend React Developer",
        company: "Cobuild Lab",
        from: "03/01/2020",
        to: "06/01/2020",
        presentDay: false,
        remote: true,
        showOnlyCountry: true,
        country: "EEUU",
        state: "Florida",
        city: "Miami",
        tasks: "I Resolve Tasks or Issues Based in the creation of a CRM, I bellong a part of the Team of Cobuild Lab, we are creating a CRM App with React, GraphQL and 8Base (Serverless application).",
        uuid: ""
    },
    {
        position: "Frontend Developer",
        company: "Minami Digital",
        from: "12/01/2017",
        to: "03/15/2019",
        presentDay: false,
        remote: true,
        showOnlyCountry: true,
        country: "Mexico/Argentina",
        state: "Mexico/Buenos Aires",
        city: "DF/Capital Federal",
        tasks: "My job here was based in building layouts with HTML5, CSS3 and Javascript. I have used other technologies like D3.JS, Bootstrap, Materialize CSS, Bulma CSS, and ReactJS.",
        uuid: ""
    },
    {
        position: "Frontend Developer and Project Manager Officer",
        company: "Softars",
        from: "08/01/2015",
        to: "08/01/2019",
        presentDay: false,
        remote: true,
        showOnlyCountry: true,
        country: "Venezuela",
        state: "Zulia",
        city: "Ciudad Ojeda",
        tasks: "I develop web apps, web systems and SaaS products with technologies like: HTML5, CSS3, Javascript, AngularJS, Angular2+, ReactJS, Laravel, NodeJS, ExpressJS, Bootstrap, MaterialUI, MeteorJS. I also program and manage tasks for the team with Athlasian Jira Software.",
        uuid: ""
    },
    {
        position: "Computer equipment operator",
        company: "Social Security Institute of Venezuela",
        from: "09/01/2008",
        to: "09/01/2015",
        presentDay: false,
        remote: false,
        showOnlyCountry: true,
        country: "Venezuela",
        state: "Zulia",
        city: "Maracaibo",
        tasks: "Working as a user support in hardware and systems, I gave support to systems based on HTML5, CSS3, Javascript, PHP, Oracle and MSSQL, and DevOps tasks with Microsoft Technologies",
        uuid: ""
    },
    {
        position: "System Analyst",
        company: "Inversiones Recreativas de Occidente, C.A",
        from: "10/01/2007",
        to: "08/01/2008",
        presentDay: false,
        remote: false,
        showOnlyCountry: true,
        country: "Venezuela",
        state: "Zulia",
        city: "Maracaibo",
        tasks: "I was work here like User Support in Hardware and Systems, I Supported systems with technologies like HTML5, CSS3, Javascript, PHP, Oracle and MSSQL, and DevOps tasks with Microsoft Technologies.",
        uuid: ""
    }];

const Experience = () => {
    return (
        <section id="work-experience" className="experience-section">
            <div className="container">
                <div className="exp-skills-columns">
                    <div className="experiences">
                        <h3 className="experience-title">Experience</h3>
                        <div className="experience-line"></div>
                        {experiences.map((item, key) => (
                            <div key={key} className="item-box">
                                <div className={`experience-box box-${key + 1}`}>
                                    <h3 className="exp-position">{item.position}</h3>
                                    <h4 className="exp-company">{item.company}</h4>
                                    <div className="exp-time">
                                        <span className="exp-from">{item.from}</span> - <span className="exp-to">{item.presentDay ? 'Present' : item.to}</span>
                                    </div>
                                    <div className="exp-place">
                                        <span className="exp-remote">{item.remote ? 'Remote - ' : ''}</span><span className="exp-country">{item.country ? item.country : ''}</span><span className="exp-state">{item.state ? `, ${item.state}` : ''}</span><span className="exp-city">{item.city ? `, ${item.city}` : ''}</span>
                                    </div>
                                    <div className="experience-modal">
                                        <h5 className="modal-title">Tasks / Achievements</h5>
                                        <p className="exp-tasks">{item.tasks}</p>
                                    </div>
                                </div>
                                <span className="experience-dot"></span>
                            </div>
                        ))}
                    </div>
                    <Skills />
                </div>
            </div>
        </section>
    );
}


export default Experience;
