const Skills = () => {
    return (
        <>
            <section id="skills" className="skills">
                <div className="section__title">
                    <h2 className="heading-2">Compétences</h2>
                </div>
                <div className="skills__container">
                    <div className="skill__techno"></div>
                </div>
                {/* fomramation & exp */}
                <div className="skills__exp" id="#exp">
                    <div className="skills__subtitle">
                        <p>Formations & Expérience</p>
                    </div>
                    <div className="skills__wrapper">
                        <div className="skills__formation timeline">
                            <p className="timeline__title">Formations</p>
                            <div className="timeline__items" id="#formation"></div>
                        </div>
                        <div className="skills__exp timeline">
                            <p className="timeline__title">Expérience</p>
                            <div className="timeline__items" id="#formation"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
