import React from 'react'

import Slider from "react-slick";

import { BannerActivation } from "../../utils/script";

const BannerData = [
  {
      image: "/images/ed1.png",
        },
  {
      image: "/images/ed2.png",
      
  },
  {
    image: "/images/ed3.png",
    },
]
const BannerData1 = [
  
  {
      image: "/images/ed9.jpg",
      
  },
  {
    image: "/images/ed8.png",
    },
    {
      image: "/images/ed7.png",
        },
    {
      image: "/images/ed6.png",
      },
]

const Education = () => {
  return (
    <div className='page-wrapper'>
   <Slider className="slider-area slider-style-5  slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                    {BannerData.map((data, index) => (
                        <div key={index} className=" ">
                            <div className="height-250 bg-bnnr " style={{backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})` }}>
                                
                            </div>
                        </div>
                    ))}
                </Slider>


                <div className='m-4 mt-5 p-5'>
        <h4>  About this –      Carrier performance</h4>       
 
 Carrier Performance Pvt. Ltd. A Premier Coaching Institute for the preparation of JEE (Main+Advanced), JEE (Main), Pre-Medical (NEET-UG), Pre-Nurture. The Institute is well regarded for the high quality entrance exam preparation and produces best results year after year. We focus on building a strong foundation of knowledge and concepts in students for their success and provide an excellent platform for the preparation of competitive exams and board level education. The best academic support and personal care which we provide to the students, helps them meet their career goals and objectives. The core values of Determination, Honesty, Authenticity, Integrity, Devotion, Humanism, Holistic Learning, Social Ethics, and concern for society & environment are all closely interwoven into the fiber of our academic programs. Our highly qualified and most experienced faculties are dedicated and committed to student’s complete success and provide assistive surroundings to contribute to their social, cultural, academic and all-round development.
 <br/> <br/>
To our students, we impart value-based career education, abundant resources, and individual attention. To the parents, we have a responsibility to nurture ethical and responsible career leadership in the children. To the society, we provide a lifelong connection to ethics and excellence in global leaders.


</div>


                <Slider className="slider-area slider-style-5  " {...BannerActivation}>
                    {BannerData1.map((data, index) => (
                        <div key={index} className=" ">
                            <div className="  bg-overlay   w-100" >
                                <img  className='height-250'
                                src={data.image}
                                alt='data'/>
                            </div>
                        </div>
                    ))}
                </Slider>


    </div>
  )
}

export default Education