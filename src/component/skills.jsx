
import "./skills.css";

function Skills() {
    return (
        <section id="skills" className="skills">
            <h1 className="skills-title">My Skills</h1>

            <div className="cards">
                <div className="skill-card frontend">
                    <h2>Frontend</h2>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                </div>

                <div className="skill-card backend">
                    <h2>Backend</h2>
                    <p>Node.js</p>
                    <p>Express.js</p>
                </div>


<div className="skill-card database">
                    <h2>Databases</h2>
                    <p>SQL Server</p>
                    <p>MongoDB</p>
                </div>
                

   <div className="skill-card programming">
                    <h2>Programming</h2>
                    <p>Java</p>
                    <p>C++</p>
                </div>

                
                <div className="skill-card tools">
                    <h2>Tools</h2>
                    <p>Git</p>
                    <p>GitHub</p>
                    <p>Bootstrap</p>
                    <p>Linux</p>
                </div>

            </div>
        </section>
    );
}

export default Skills;
