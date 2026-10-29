
import "./Contact.css";

function Contact() {
    return (
        <section id="contact" className="contact">
            <h1 className="contact-title">Contact Me</h1>

            <div className="contact-card">
                <div className="contact-item">
                    <h3>Phone</h3>
                    <a href="tel:0905058108">0905058108</a>
                </div>

                <div className="contact-item">
                    <h3>Telegram</h3>
                    <a
                        href="https://t.me/Geta_hoyy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @Geta_hoyy
                    </a>
                </div>

                <div className="contact-item">
                    <h3>Email</h3>
                    <a href="mailto:adoniyaskassaw21@gmail.com">
                        adoniyaskassaw21@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
