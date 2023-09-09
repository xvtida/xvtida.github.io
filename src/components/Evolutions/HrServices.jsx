import React from 'react'

// import { FiArrowRight, FiCheck } from "react-icons/fi";

// import { Link } from 'react-router-dom'
const HrServices = () => {
  return (
    <>
       {/* Start Slider area  */}
       <div className='mainWrapper'>     
         <div className="slider-area slider-style-2 height-950 bg_image" data-black-overlay="4" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/ahr.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-start">
                                    <h4 className="subtitle"><span className="theme-gradient">automated HR Services</span></h4>
                                    <h1 className="title display-one">On-demand Services
for Greater Flexibility
and Productivity 
</h1>
                                   
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider area  */}

    <section className="service-details sec-mar">
       
        <div className="container">
        <div className='  flex-column   col-12'>
        {/* <h1 className=' d-flex justify-content-center text-uppercase text-secondary mb-lg-12 '> Content Management Serevices</h1> */}
        </div>
          <div className="row">
            <div className="col-md-6 col-lg-12 col-xl-12 or2">
              <div className="signle-service-details d-flex">
            
               
               <p className='justify-content '>
               Human resource management is an essential part of every company, and the drastic increase in the pace of work is driving companies to pursue HR automation aggressively.
Our ability to service multiple locations in India and the use of cutting-edge technology will help our clients embrace flexibility, improve productivity, maintain compliance and build a more efficient HR department. With cloud-based technologies, our HRO services manage HR processes to become simplified, automated, and outsourced.
Whether it’s hiring new employees, training, payroll, compliance, or Grievance Management, we provide automated HR services.
  </p>
              </div>
            </div>
         
          </div>
          <div className="single-service-work-process">
            <h4>In today's dynamic markets, HR automation inessential to streamlining workflows and documentation in every Human Resources department.</h4>
            <div className="single-step">
              <div className="row">
                <div className="col-md-8 col-xl-8 or2">
                  <div className="step">
                    <div className="step-count">
                    
                    </div>
                    <h4>Hiring</h4>
                    <p>
                    
                     Organizations both large and small depend on internal teams to source and recruit high-quality talent, and with such a daunting task, even the best sourcing teams may need support. Performance Edge  is one of the industry-leading recruitment process solutions providers. We work as an extension of your hiring team to craft the right recruitment strategies and processes. With a focus on methodology, measurable results, and flexible solutions, we effectively manage the shortlisting, screening & evaluation process. <br/>  <br/>
                     After the talent scouting, we put the shortlisted candidates on your team for the final selection round. Upon final decision, we manage the offers, acceptance, and onboarding for you. Our recruitment process solutions simplify the hiring procedure through an end-to-end hiring process controlled digitally through our HRMS system.
Whether you’re looking for a specific talent, launching a new program or opening a new facility, our project hiring staffing solutions involve working with your company’s specifications and requirements and making them the top priority of the talent acquisition process. Our professionals strive to ensure that you have the right candidates to meet specific job profiles and plan initiatives so your project goes off without a hitch.

                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-xl-4 or1">
                  <div className="step-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/hirng.png"}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            </div>
         
            <div className="row">
            <div className="col-xl-6">
              <div className="blog-banner-img ">
                <img  className=''
                  src={process.env.PUBLIC_URL + "/images/staffing.png"}
                  alt="blog images"
                />
              </div>
            </div>
            <div className="col-xl-6 mt-3">
              <div className="blog-banner-content">
              <h4>Staffing</h4>
                <p>
                When it comes to sourcing and attracting talented people to work, several factors come into play, including enhancing recruitment processes, implementing innovative technology, and improving the candidate experience. However, with years of experience in handling and delivering complex staffing needs, our talented team helps our clients to address their entire spectrum of human resource requirements efficiently. <br/>
                <br/>

                We work closely with our clients to address and anticipate their needs, find and attract talent with relevant skills, and hire suitable candidates by leveraging our expertise, digital tools, and experienced team.
Our managed staffing solutions have been extended to managing the entire life cycle of employees at our clients’ offices and setting up best-in-class shared or dedicated offices with highly secure information. You can benefit from an improved security environment, IT asset deployment, Manpower training on technical and soft skills, and customized engagement, reward, and recognition programs that deliver industry-leading employee retention rates and EVOC with a staffing solution tailored to each client’s specific needs.

                </p>
              </div>
            </div>
          </div>

          <div className="row">
                <div className="col-md-8 col-xl-8 or2">
                  <div className="step">
                    <div className="step-count">
                    
                    </div>
                    <h4>Payroll & Compliance</h4>
                    <p>
                    Many companies have relied on an in-house delivery model to service their payroll operations in the past. Still, these days, organizations leverage technology for an efficient and unified payroll, or they face increased costs, unnecessary labour, and even compliance issues.
                    <br/>
                <br/>
Performance Edge offers centralized payroll services that bring the best of standardization, automation, compliance, and security. We manage the entire remuneration & benefits program digitally, including salary processing, background verification, processing leave & attendance input payout compliance obligations including retirement benefits, bonuses, expense management, travel disbursement, income tax, and employees’ full & final settlements.
Our centralized payroll system lets the employer know and enables the employee to understand what is going on with the organization. It also ensures that timeliness, accuracy & compliance guidelines are met in their entirety.

                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-xl-4 or1">
                  <div className="step-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/payroll.png"}
                      alt="images"
                    />
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </section>
      </div>

    </>
  )
}

export default HrServices