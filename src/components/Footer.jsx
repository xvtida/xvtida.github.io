import React from 'react'
import {Link} from "react-router-dom";
import footerData from '../data/footerData.json'
import CalltoActionSeven from "../common/CTA";

import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
const Footer = () => {

  
const footerIntemOne =  footerData[0];
const footerIntemTwo =  footerData[1];
const footerIntemThree =  footerData[2];

const footerIntemFive =  footerData[4];

const indexOneLink = (footerIntemOne.quicklink);

const indexTwoLink = (footerIntemTwo.quicklink);
const indexThreeLink = (footerIntemThree.quicklink);
  return (
    <>
        <footer className="rn-footer footer-style-default variation-two">
            <CalltoActionSeven />
            <div className="footer-top">
                <div className="container">


                    <div className="row">
                        {/* Start Single Widget  */}
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="rn-footer-widget">
                                <h4 className="title">{footerIntemOne.title}</h4>
                                <div className="inner">
                                    <ul className="footer-link link-hover">
                                        {indexOneLink.map((data, index) => (
                                            <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* End Single Widget  */}




 {/* Start Single Widget  */}
 <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="rn-footer-widget">
                                <h4 className="title">-</h4>
                                <div className="inner">
                                    <ul className="footer-link link-hover">
                                        {indexTwoLink.map((data, index) => (
                                            <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* End Single Widget  */}



                        {/* Start Single Widget  */}
                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="rn-footer-widget">
                                <div className="widget-menu-top">
                                    <h4 className="title">{footerIntemThree.title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {indexThreeLink.map((data, index) => (
                                                <li key={index}><Link to={`${data.url}`}>{data.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Widget  */}



                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">{footerIntemFive.title}</h4>
                                    <div className="inner">
                                        <h6 className="subtitle ">{footerIntemFive.subtitle}</h6>
                                        <ul className="social-icon social-default justify-content-start">
                                            {/* <li><Link to="facebook.com"><FiFacebook /></Link></li> */}
                                            <li><a href='https://www.linkedin.com/in/performanceedge-undefined-981084290/'><FiLinkedin /></a> </li>
                                            <li><a href="https://twitter.com/performanc10735/lists"><FiTwitter /></a></li>
                                            {/* <li><Link to="instagram.com"><FiInstagram /></Link></li>
                                            <li><Link to="linkdin.com"><FiLinkedin /></Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </footer>
        {/* <ScrollTop /> */}
    </>
)
}

export default Footer