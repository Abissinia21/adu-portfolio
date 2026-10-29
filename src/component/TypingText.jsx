import { useEffect, useState } from "react";

const roles = [
    "Computer Science Student",
    "Frontend Developer",
    "MERN Stack Developer",
];

function TypingText() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let delay = deleting ? 45 : 95;

        if (!deleting && text === currentRole) {
            delay = 1200;
        }

        const timer = setTimeout(() => {
            if (!deleting && text === currentRole) {
                setDeleting(true);
            } else if (deleting && text.length > 0) {
                setText(text.slice(0, -1));
            } else if (deleting) {
                setDeleting(false);
                setRoleIndex((previous) => (previous + 1) % roles.length);
            } else {
                setText(currentRole.slice(0, text.length + 1));
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [text, deleting, roleIndex]);

    return (
        <span className="typing-text" aria-label={roles[roleIndex]}>
            {text}
            <span className="typing-cursor" aria-hidden="true">|</span>
        </span>
    );
}

export default TypingText;
