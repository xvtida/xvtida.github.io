import React from 'react'
import Typed from 'react-typed';

import SectionTitle from '../../common/SectionTitle';
const Careers = () => {
  return (
    <>
               {/* Start Slider Area  */}
               <div className="slider-area slider-style-1 bg-transparent variation-2 height-750">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 order-2 order-lg-1 mt_md--40 mt_sm--40">
                                <div className="inner text-start">
                                    <h1 className="title theme-gradient display-two">Marketing Agency <br /> For {" "}
                                        <Typed
                                            strings={[
                                                "Freelancer.",
                                                "Developer.",
                                                "Startup.",
                                            ]}
                                            typeSpeed={80}
                                            backSpeed={5}
                                            backDelay={1000}
                                            loop
                                        />
                                    </h1>
                                    {/* <p className="description">We help our clients succeed by creating brand identities, digital experiences, and print materials.</p>
                                    <div className="button-group">
                                         <Link className="btn-default btn-medium btn-border round btn-icon" to="#">Contact Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-5 order-1 mt-4 order-lg-4">
                                <div className="thumbnail">
                                    <img src="./images/crt.jpg" alt="Banner Images" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}

                <div className="rn-service-area rn-section-gap ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Careers Opportunities."
                                    description = ""
                                    />
                            </div>
                           









                            <ul className="list-icon">
                                        <li><span className="icon"></span> Manager Reporting/MIS - Gurugram</li>
                                        <li><span className="icon"></span>  Team Leader Customer Service/Tele-Sales -
Gurugram/Kolkata/Bengaluru.</li>
                                        <li><span className="icon"></span> Asst. Manager / Manager Training - Gurugram.</li>
                                        <li><span className="icon"></span> Asst. Manager / Manager Operations - Gurugram / Bangalore</li>
                                        <li><span className="icon"></span> HR Executive - Gurugram/Kolkata/Bangalore</li>
                                        <li><span className="icon"></span> Quality Assurance Analyst (QA) - Gurugram/Kolkata/Bengaluru</li>
                                        <li><span className="icon"></span> Process Trainer - Gurugram/Kolkata/Bengaluru</li>
                                        <li><span className="icon"></span> Tableau Manager - Gurugram</li>
                                        <li><span className="icon"></span> Lead / Senior Developer (Full Stack) - Bengaluru</li>
                                   
                                        <li><span className="icon"></span> Frontend Developer - Bengaluru</li>
                                   
                                    
                                    
                                    
                                    </ul>
                               
                        </div>
                       
                    </div>
                </div>

    
    </>
  )
}

export default Careers