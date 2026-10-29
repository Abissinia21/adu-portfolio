
import "./GitHub.css";

function GitHub() {
    return (
        <section id="github" className="github">
            <h1 className="github-title">GitHub</h1>

            <div className="github-text">
                <p>
                    I regularly upload my web development projects to GitHub,
                    including responsive websites, dashboards, calculators,
                    and future React applications.
                </p>

                <a
                    href="https://github.com/Abissinia21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                >
                    Visit My GitHub
                </a>
            </div>
        </section>
    );
}

export default GitHub;
