import { ContactSectionStyled } from "../styled-components/ContactSection.styled"
import contactAvatar from "../assets/contact-avatar.png";

const ContactSection = () => {
    return (
        <>
            <ContactSectionStyled>
                <div className="container">
                    <div className="row me-0">
                        <div className="col-12 col-lg-6 d-flex flex-column align-items-center d-lg-block">
                            <div className="section-head">
                                <h2 className="section-title">Connect With Me</h2>
                                <p className="section-title-desc">Lets Connect for any interesting projects</p>
                            </div>
                            <div className="contact-img">
                                <img className="img-fluid" src={contactAvatar} alt="contact avatar" height={500} width={430} />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                            <form action="https://getform.io/f/byvpjzxa" method="POST" className="form-wrapper">
                                <div className="form-item d-flex flex-column">
                                    <label id="fullName"><p>Full Name</p></label>
                                    <input name="fullName" required/>
                                </div>

                                <div className="form-item d-flex flex-column">
                                    <label id="email"><p>Email Address</p></label>
                                    <input name="email" type="email" required/>
                                </div>

                                <div className="form-item d-flex flex-column">
                                    <label id="subject"><p>Subject</p></label>
                                    <input id="subject" name="subject" type="text" required/>
                                </div>

                                <div className="form-item d-flex flex-column">
                                    <label id="message"><p>Your Message</p></label>
                                    <textarea id="message" name="message" style={{ minHeight: "120px" }} required/>

                                </div>

                                <button className="w-100 btn btn-gradient text-white" type="submit">Submit</button>

                            </form>

                        </div>

                    </div>

                </div>
            </ContactSectionStyled>
        </>
    )
}
export default ContactSection