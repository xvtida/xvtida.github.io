import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/images/ahr.jpg',
        title: 'Automated HR Service',
        description: 'There are many variations variats  of passages of Lorem Ipsum available, but the majority.',
        link:'/automated-hr-services'

    },
    {
        image: '/images/re2.png',
        title: 'Residential & Commercial',
        description: 'Passages there are many variatin Lorem Ipsum available, but the majority have suffered.',
        link:'/r-e-project-solution'
    },
    {
        image: '/images/ed4.png',
        title: 'Educational Service',
        description: 'Variations There are many of pass ages of Lorem Ipsum available, but the majority but the majority.',
        link:'/educations'
    },
    {
        image: '/images/evl.jpg',
        title: 'Banking & Finance',
        description: 'There are many variations variats  of passages of Lorem Ipsum available, but the majority.',
        link:'/banking-services'
    },
    {
        image: '/images/rw.png',
        title: 'Retail & Warehousing',
        description: 'Passages there are many variatin Lorem Ipsum available, but the majority have suffered.',
        link:'/retail-warehouse'
    },
    {
        image: '/images/ecom.png',
        title: 'E-commerce',
        description: 'Variations There are many of pass ages of Lorem Ipsum available, but the majority but the majority.',
        link:'/e-commerce'
    }
]
const Service = ({textAlign, serviceStyle}) => {
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
                                    <h4 className="title"><Link to={val.link} dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
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
export default Service;