import data from "../assets/data/projectDatas.json";

import SkillTag from "../components/SkillTag";

const Project = () => {
    return (
        <section className="portfolio--section u-section-center" id="project">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <h2 className="section--heading">
                        <span className="heading-number-color">02.</span> Mes Projets
                    </h2>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.works?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt={item.alt} />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                            </div>

                            <SkillTag />

                            <p className="text-sm portfolio--link">
                                <a href={item.link} rel="noreferrer" target="_blank">
                                    Démo
                                </a>
                                <a href="#">Code</a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
