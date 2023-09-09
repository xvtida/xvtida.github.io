import React from 'react'
import Service from '../../common/Service'
import SectionTitle from '../../common/SectionTitleA'
const Evolution = () => {
  return (
   <>
    <div className="slider-area slider-style-2  variation-2  height-850 bg_image" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/evl1.jpg)`}}>
                    <div className="container mt-5">
                        <div className="row mt-5">
                            <div className="col-lg-8 col-xl-6 mx-4 mt-5 ">
                                <div className="inner text-start">
                                    <h1 className="title   theme-gradient ">We provide <br /> reliable business <br /> consulting help.</h1>
                                    <h6 className="tag-title">SOLUTION FOR YOUR BUSINESS</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rn-service-area rn-section-gap ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "What we can do for you"
                                    title = "Main Goal provide best services."
                                    description = ""
                                />
                            </div>
                        </div>
                        <Service 
                            serviceStyle = "service__style--2"
                            textAlign = "text-center"
                            />
                    </div>
                </div>
   </>
  )
}

export default Evolution