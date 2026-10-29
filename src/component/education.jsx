
import "./Educations.css";

function Education() {
    return (
        <section id="education" className="education">
            <h1 className="education-title">My Education</h1>

            <div className="edu-description">
                <div className="edu-icon">🎓</div>

                <h3>Bachelor of Science in Computer Science</h3>

                <h4>University</h4>
                <p>Wollo University</p>

                <h4>Duration</h4>
                <p>2024 – Present</p>

                <p className="edu-details">
                    Currently studying computer science, web development,
                    data structures, algorithms, databases, networking,
                    operating systems, and cybersecurity.
                </p>
            </div>
        </section>
    );
}

export default Education;
