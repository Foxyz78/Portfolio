import Form from "../components/Form";

const Contact = () => {
    return (
        <>
            <section className="contact u-section-center" id="contact">
                <div className="contact__title">
                    <h2 className="section--heading">
                        <span className="heading-number-color">03.</span> Contactez-Moi
                    </h2>
                </div>
                <div className="contact__container">
                    <div className="contact__content">
                        <div className="contact__info-list">
                            <div className="contact__info-item">
                                <i className="">
                                    <div className="group">
                                        <p className="contact__title">Tel</p>
                                        <p className="contact__subtitle">06 13 24 56 10</p>
                                    </div>
                                </i>
                            </div>
                            <div className="contact__info-item">
                                <i className="">
                                    <div className="group">
                                        <p className="contact__title">E-Mail</p>
                                        <p className="contact__subtitle">foxyz78@gmail.com</p>
                                    </div>
                                </i>
                            </div>
                            <div className="contact__info-item">
                                <i className="">
                                    <div className="group">
                                        <p className="contact__title">Location</p>
                                        <p className="contact__subtitle">Versailles - France</p>
                                    </div>
                                </i>
                            </div>
                        </div>
                        <Form />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
