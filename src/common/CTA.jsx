import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
// import Logo from "../logo/Logo";

const callToActionData = {
    title: "Ready to start Business with Us!?",
    subtitle: "If you want to create a corporate template you can purshace now our doob template.",
    btnText: "Contact Us",
}

const CalltoActionSeven = () => {
    return (
        <div className="rn-callto-action clltoaction-style-default style-7">
            <div className="container">
                <div className="row row--0 align-items-center content-wrapper">
                    <div className="col-lg-8 col-md-8">
                        <div className="inner">
                            <div className="content text-start">
                                {/* <Logo 
                                    image={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
                                    image2={`${process.env.PUBLIC_URL}/images/logo/logo-dark.png`}
                                /> */}
                                <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                    <p className="subtitle">{callToActionData.title}</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                            <div className="call-to-btn text-start mt_sm--20 text-md-end">
                                <Link to="/contact" className="btn-default btn-icon"  >{callToActionData.btnText} <i className="icon"><FiArrowRight /></i></Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalltoActionSeven;