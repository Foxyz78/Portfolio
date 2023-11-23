const Form = () => {
    return (
        <>
            <form action="" className="form" id="contact-form">
                <div className="group">
                    <div className="form__group">
                        <input className="form__input" type="text" name="username" id="name" />
                        <label htmlFor="name" className="form__label u-vertical-center">
                            nom
                        </label>
                    </div>
                    <div className="form__group">
                        <input className="form__input" type="text" name="email" id="email" />
                        <label htmlFor="email" className="form__label u-vertical-center">
                            email
                        </label>
                    </div>
                </div>
                <div className="form__group">
                    <input className="form__input" type="text" name="subject" id="subject" />
                    <label htmlFor="subject" className="form__label u-vertical-center">
                        subject
                    </label>
                </div>
                <div className="form__group">
                    <textarea className="form__input" name="message" id="message" cols="30" rows="10"></textarea>
                    <label htmlFor="message" className="form__label">
                        message
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Contactez-moi
                </button>
            </form>
        </>
    );
};

export default Form;
