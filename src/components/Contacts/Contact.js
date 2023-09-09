import React from 'react';
import Breadcrumb from '../../common/Breadcrumb';
import SectionTitle from '../../common/SectionTitle';
import ContactOne from "./ContactOne";

const Contact = () => {
    return (
        <>
           
                <Breadcrumb
                    title="Have Any Query <br/> We are here!"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Contact"
                />
                <div className="main-content">
                    {/* Start Contact Area  */}
                    <div className="rwt-contact-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "Contacts Method"
                                        title = "Our Contact Address Here."
                                        description = ""
                                    />
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                    </div>
                    {/* End Contact Area  */}
                </div>
           
        </>
    )
}
export default Contact;