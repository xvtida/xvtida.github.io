import React from 'react'
import Slider from "react-slick";
import SectionTitle from '../../common/SectionTitleA';

import { BannerActivation } from "../../utils/script";

import Hero from './Hero';

const BannerData = [
  {
      image: "/images/hp.jpg",
      title: "Performance Edge ",
      description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
  },
  {
      image: "/images/h2.png",
      title: "Performance Edge ",
      description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
  },
  {
    image: "/images/h3.png",
    title: "Performance Edge ",
    description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
}

]
const Hompage = () => {
  return (
    <div className=' page-wrapper'>
  <Slider className="slider-area  slider-style-4 " {...BannerActivation}>
                    {BannerData.map((data, index) => (
                        <div key={index} className="">
                            <div className="  bg_image height-650" style={{backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})` }}>
                                <div className="container">
                                    <div className="row row--30 align-items-center">
                                        <div className="order-2 order-lg-1 col-lg-8">
                                            <div className="inner text-start">
                                                <h1 className="theme-gradient  title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                                                {/* <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p> */}
                                                {/* <div className="button-group mt--30">
                                                    <a className="btn-default" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">PURCHASE NOW</a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className='container mt--40'>
                <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "About Performance Edge "
                                    title = "Welcome to Performance Edge "
                                    description = ""
                                />
                                <p className='description'>  We are India’s fastest growing Business Project Management company. We are a digitally     
       empowered company, and we want our outcomes & partnerships to be outstanding. 
           We create exceptional customer interactions whilst achieving our client’s individual business goals.
</p>
                            </div>

                            <Hero 
                            serviceStyle = "service__style--2"
                            textAlign = "text-center"
                            />
                        </div>
                        </div>
    </div>
  )
}

export default Hompage