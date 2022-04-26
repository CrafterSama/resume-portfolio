import SoftSkills from '../SoftSkills';

const skills = [{
            name: "Tools",
            description: "Visual Studio Code, Sublime Text, Git (Github, Bitbucket, Gitlab), Jira, Trello, Slack"
        },
        {
            name: "Languages",
            description: "Javascript, PHP, Python, HTML/5, CSS/3, SQL, NoSQL, Bash"
        },
        {
            name: "Language Processing",
            description: "Information processing, Information extraction, API manipulation"
        },
        {
            name: "Frameworks and Libraries",
            description: "React, Redux, React Native, VueJS, Laravel, Django, SASS, LESS, MaterialUI for React, Bootstrap, Materialize CSS, Bulma CSS, JQuery."
        },
        {
            name: "Database Management",
            description: "Database Design and Management, Data Analysis, MySQL/MariaDB, MongoDB, ORM(Eloquent/Doctrine), Mongoose",
        },
        {
            name: "Research and Planning",
            description: "Identifying and Solve problems, Gathering Information, Developing solutions, Calculating results, Scrum",
        }];


const Skills = () => {
    return (
        <section id="skills" className="tech-skills-section">
            <div className="skills">
                <h3 className="skills-title">Technical Skills</h3>
                {skills.map((item, index) => (
                    <div key={index} className="skills-box">
                        <h3 className="skill-title">{item.name}</h3>
                        <p className="skill-description">{item.description}</p>
                    </div>
                ))}
                <SoftSkills />
            </div>
        </section>
    );
}

export default Skills;
