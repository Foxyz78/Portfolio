import mypicture from "../assets/images/mypicture.jpg";

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-section__box">
                <div className="hero-section__content">
                    <p className="hero-section__title">Bonjour, je suis Anthony</p>
                    <h1 className="hero-section__job">
                        <span className="hero-section__job-color">Développeur</span> <br />
                        Frontend
                    </h1>
                    <p className="hero-section__description">
                        Je vis actuellement à Versailles,
                        <br />
                        Passioné de Tech et Hardware.
                        <br />
                        Je suis curieux, j'adore la nouveauté et me lancer de nouveaux défis.
                        <br />
                        J'adore créer des applications et interfaces web.
                    </p>
                    <a href="#contact">
                        <button className="btn btn-primary">Contactez-moi</button>
                    </a>
                </div>

                <div className="hero-section__image">
                    <img src="" alt="photo d'Anthony" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
