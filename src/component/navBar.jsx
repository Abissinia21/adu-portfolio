
import "./NavBar.css";

function NavBar() {
    return (
        <div className="header">
            <nav className="navbar">
                <div className="brand">
                    <img src="/adony.png" alt="My photo" />
                    <h1 className="logo">Adony</h1>
                </div>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#education">Education</a>
                    <a href="#github">GitHub</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
