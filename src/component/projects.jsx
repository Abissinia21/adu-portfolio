
import "./Projects.css";

function Project() {
    return (
        <section id="projects" className="projects">
            <h1 className="projects-title">My Projects</h1>

            <div className="project-list">
                <div className="project-card">
                    <img src="/image1.png" alt="BMI calculator project" />

                    <div className="project-content">
                        <h2>BMI Calculator</h2>
                        <p>
                            A responsive BMI calculator built using HTML,
                            CSS, and JavaScript. It performs basic BMI
                            calculations with a clean user interface.
                        </p>

                        <h4>Technologies</h4>
                        <p>HTML · CSS · JavaScript</p>

                        <a
                            href="https://abissinia21.github.io/BMI-Calculator/"
                            target="_blank"
                            rel="noreferrer"
                            className="project-btn"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <img src="/sample1.png" alt="Portfolio website project" />

                    <div className="project-content">
                        <h2>Portfolio Website</h2>
                        <p>
                            A personal portfolio showcasing my work,
                            skills, and projects.
                        </p>

                        <h4>Technologies</h4>
                        <p>HTML · CSS · JavaScript</p>

                        <a
                            href="https://abissinia21.github.io/portfolio/"
                            target="_blank"
                            rel="noreferrer"
                            className="project-btn"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <img
                        src="/sample2.png"
                        alt="Telegram group dashboard project"
                    />

                    <div className="project-content">
                        <h2>Telegram Group Dashboard</h2>
                        <p>
                            A modern dashboard designed for a Telegram
                            learning community. It displays member
                            statistics, course progress, recent activities,
                            and responsive cards.
                        </p>

                        <h4>Technologies</h4>
                        <p>HTML · CSS</p>

                        <a
                            href="https://abissinia21.github.io/portfolio/dash.html"
                            target="_blank"
                            rel="noreferrer"
                            className="project-btn"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>

                <div className="project-card">
                    <img src="/todo.png" alt="Todo list app project" />

                    <div className="project-content">
                        <h2>My Todo App</h2>
                        <p>
                            A simple and functional todo list web application.
                        </p>

                        <h4>Technologies</h4>
                        <p>HTML · CSS · JavaScript</p>

                        <a
                            href="https://abissinia21.github.io/todo-list/"
                            target="_blank"
                            rel="noreferrer"
                            className="project-btn"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
