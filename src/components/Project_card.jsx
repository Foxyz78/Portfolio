import data from "../assets/data/projectDatas.json";

const Project_card = () => {
    return (
        <>
            <div className="portfolio--section--card--content">
                <div>
                    <h3 className="portfolio--section--title">{item.title}</h3>
                    <p className="text-md">{item.description}</p>
                </div>
                <p className="text-sm portfolio--link">
                    {item.link}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 19" fill="none">
                        <path
                            d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                            stroke="currentColor"
                            stroke-width="2.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </p>
            </div>
        </>
    );
};

export default Project_card;
