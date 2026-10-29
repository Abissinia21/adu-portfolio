import './Home.css'
import TypingText from "./TypingText";
function Home() {
    return (
        <section id="home" className="home">
            <div className="img">
                <img src="/adony.png" alt="Adoniyas" />
            </div>

            <div className="landing-page">
                <h1>Hi, I'm Adoniyas</h1>

                <h2>
    <TypingText />
</h2>

                <p id="home-text">
                    I build responsive websites using HTML, CSS, and
                    JavaScript while continuously improving my software
                    engineering skills.
                </p>

                <div className="home-buttons">
                    <a href="#projects" className="btn">
                        View Projects
                    </a>

                    <a href="/Adoniyas_Kassaw_CV(3).pdf" className="btn" download>
                        Download CV
                    </a>

                    <a href="#contact" className="btn">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
