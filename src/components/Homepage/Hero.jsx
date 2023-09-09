import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/h5.png',
        title: 'Project Evaluation',
        description: 'Our team of certified and experience to evaluate the complex issues with project which  stand good way to find right project.  maintain compliance and build a more efficient project cycle.',
     

    },
    {
        image: '/images/h6.png',
        title: 'Project Framework',
        description: 'We drive all project through management work -frame  to measure continuous performance rigorous quality ,control and industry-specific knowledge.',
        },
    {
        image: '/images/h7.png',
        title: 'Project Collaboration',
        description: ' collaborate with Global organisation client across Manufacturing and production, e-commerce, retail, travel, and telecom vertical to achieve effective and efficient business operations.',
        },
   
]
const Hero =({textAlign, serviceStyle}) => {
  return (
      <div className="row row--15 service-wrapper">
            {ServiceList.map( (val , i) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                  <ScrollAnimation 
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}>
                      <div className={`service ${serviceStyle} ${textAlign}`}>
                          <div className="inner">
                              <div className="image">
                                  <img src={`${val.image}`} alt="card Images" />
                              </div>
                              <div className="content">
                                  <h4 className="title p-2 m-2 justify" dangerouslySetInnerHTML={{__html: val.title}}></h4>
                                  <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                              </div>
                          </div>
                      </div>
                  </ScrollAnimation>
              </div>
          ))}
      </div>
  )
}

export default Hero