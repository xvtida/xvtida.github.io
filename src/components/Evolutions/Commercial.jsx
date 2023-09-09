import React from 'react'

import Slider from "react-slick";


import { BannerActivation } from "../../utils/script";

const BannerData = [
  {
      image: "/images/re1.png",
      title: "Residential Project  Solution",
      description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
  },
  {
      image: "/images/re2.png",
      title: "Commercial Project Solution",
      description: "We help our clients succeed by creating brand identities, digital experiences, and print materials."
  },

]
const Commercial = () => {
  
  return (
   <>
   <Slider className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className=" bg-overlay bg_image" style={{backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})` }}>
                                <div className="container">
                                    <div className="row row--30 align-items-center">
                                        <div className="order-2 order-lg-1 col-lg-8">
                                            <div className="inner text-start">
                                                <h1 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h1>
                                                <p className="description" dangerouslySetInnerHTML={{__html: data.description}}></p>
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
   
                <div className="row mt-5 ">
            <div className="col-md-6 col-lg-12 col-xl-12 or2">
              <div className="signle-service-details  m-3 p-1">
         <h4 className='text-muted'>Comprehensive Wiring & Installation for Home or Business</h4>      
               <p className='align-center'>
               Our team of certified and experienced electricians is committed to providing the highest quality wiring and installation services for residential, commercial, and industrial properties. Whether you’re building a new property, upgrading your electrical system, or expanding your business, we have the expertise and experience to ensure a safe and efficient electrical solution.
We provide top-quality home wiring services that ensure your home remains powered, protected, and efficient. Whether you’re building a new home, renovating your existing one, or addressing specific electrical issues, we have the expertise to handle all your home wiring needs.

  </p>
              </div>
            </div>
         
          </div>
          <div className="single-service-work-process m-5 p-2">
             <div className="single-step">
              <div className="row">
                <div className="col-md-8 col-xl-8 or2">
                  <div className="step">
                    <div className="step-count">
                    
                    </div>
                    <h4>Superior Electrical Service Team</h4>
                    <p>
                    The best way to ensure proper installation, repair, and servicing of your property’s electrical needs is by putting your trust in a reputable electrician. Our technicians are professional, our customer service personnel fantastic… <br/> and our owners aren’t too shabby, either! 
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-xl-4 or1">
                  <div className="step-img">
                    <img className='w-75 rounded'
                      src={process.env.PUBLIC_URL + "/images/re3.png"}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            </div>
         
         

       
            
          </div>

          <div className="slider-area slider-style-1 bg-transparent ">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-10 col-xl-11   ">
                                <div className="inner text-start">
                                    <span className="subtitle">Why Choose Us for </span>
                                    <h1 className="title theme-gradient display-three">Wiring & Installation Services</h1>
                                    <ul  >
                                        <li> <strong className='badge bg-secondary m-2'>	Versatile Expertise: </strong>Our electricians have extensive experience working with a wide range of properties, from residential homes to commercial facilities and industrial complexes.</li>
                                        <li><strong className='badge bg-secondary m-2'>Custom Solutions:</strong> We work closely with you to understand your property’s unique needs, offering tailored wiring and installation solutions that enhance safety and efficiency.</li>
                                        <li><strong className='badge bg-secondary m-2'>Safety First:</strong> Our team prioritizes your safety, adhering to the highest industry standards and local regulations for each project.</li>
                                        <li><strong className='badge bg-secondary m-2'>Transparent Pricing:</strong> 
 We believe in providing honest and upfront pricing for all our services. No hidden fees or surprises – just top-quality work at a fair prices</li>
                                   
                            





<h4>                                    Wiring for Home or Business Services</h4>

<li> <strong className='badge bg-secondary m-2'>New Home Wiring:</strong>	 Trust our skilled electricians to design and install a safe and efficient electrical system for your new home, ensuring seamless power delivery.</li>

<li> <strong className='badge bg-secondary m-2'>Home Rewiring:</strong>	 
	 Upgrade your existing home’s wiring to enhance electrical performance, reduce the risk of electrical hazards, and accommodate new technologies.</li>

<li> <strong className='badge bg-secondary m-2'>	Electrical Troubleshooting:</strong>	 Our team can diagnose and resolve any electrical issues in your home, ensuring a safe and reliable electrical system.<br/></li>

<li> <strong className='badge bg-secondary m-2'>Inspection & Assessment:</strong>	  We’ll thoroughly assess your home’s electrical system and recommend the most appropriate solutions based on your unique needs and goals.</li>

<li> <strong className='badge bg-secondary m-2'>New Construction Wiring:</strong>	 
 Ensure your new property is powered safely and efficiently with our expert wiring and installation services</li>

 <li> <strong className='badge bg-secondary m-2'>Electrical System Upgrades:</strong>	  Upgrade your existing electrical system to meet modern safety standards and improve energy efficiency.</li>
<li> <strong className='badge bg-secondary m-2'>Lighting Design & Installation:</strong> Create the perfect ambiance and enhance productivity with professional lighting design and installation services for all property types.</li>


<li> <strong className='badge bg-secondary m-2'>Electrical Maintenance:</strong>  Protect your investment with regular electrical maintenance services that ensure the safety and efficiency of your property.</li>

Don’t compromise on the safety and efficiency of your property.<br/> Trust us to provide you with the highest quality wiring and installation services for residential, commercial, and industrial properties.<br/>


       </ul>


                                    {/* <div className="button-group mt--40">
                                        <a className="btn-default btn-medium round btn-icon" target="_blank" href="https://themeforest.net/checkout/from_item/33571911?license=regular">Purchase Now <i className="icon"><FiArrowRight /></i></a>
                                        <Link className="btn-default btn-medium btn-border round btn-icon" to="#">Contact Us <i className="icon"><FiArrowRight /></i></Link>
                                    </div> */}
                                </div>
                            </div>
                            {/* <div className="col-lg-5 col-xl-6 order-1 order-lg-2">
                                <div className="frame-image">
                                    <img src="./images/about/about-3.png" alt="Banner Images" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
   </>

)  }

export default Commercial