import React from 'react'

const Banking = () => {
  return (
    <div className='page-wrapper'>
            <div className="demo-slider-area slider-area bg-transparent slider-style-1 pb--100 pt--70">
              <div className="bg_banking h-75 "  >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <div className=" theme-gradient bg-black  mb--20">
                                       <span className='theme-gradient '>Banking & Financial Partner services</span>
                                            </div>
                                    <h1 className="title display-one">
                                    Dedicated to supporting <span className="theme-gradient">businesses</span>  on their journey to achieving their 
                                        <span className="theme-gradient m-1"> goals</span> 
                                       
                                    </h1>
                                    {/* <p className="description text-black-50 display-three"> we align businesses to deliver integrated customer experiences.</p> */}
                                    {/* <div className="button-group">
                                        <a className="btn-default btn-large round btn-icon" href="#demo">View Demo <FiArrowDown /></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>


                
                <p className=" container"> Optimizing the customer experience is an ever-evolving process that can make or break a business’s ability to remain competitive. However, in today’s business world, exceptional interaction can happen across different communication channels. These conversations need to flow across appropriate channels to meet the needs of the customer. <br/><br/>
Understanding that all organizations have different support requirements, Performance Edge  has developed capabilities that ensure we deliver the highest quality of engagement regardless of the channel. Whether it’s exceeding customer expectations or optimizing your operating processes, our agents, processes, and data insights across efficient channels allow us to focus on the customer and their needs.<br/> No matter what channel customers are on, we always think along with you and offer consistently robust support.
</p>

<section className="service-details sec-mar">
       
       <div className="container">
       <div className='  flex-column   col-12'>
       {/* <h1 className=' d-flex justify-content-center text-uppercase text-secondary mb-lg-12 '> Content Management Serevices</h1> */}
       </div>
         
         <div className="single-service-work-process mt-4">
                     <div className="single-step">
             <div className="row">
               <div className="col-md-8 col-xl-8 or2">
                 <div className="step">
                   <div className="step-count">
                   
                   </div>
                   <h4>Voice</h4>
                   <p>
                   
                   Social media, in-browser chatbots, and e-mails are great ways to communicate with customers, but sometimes customers need to hear your voice. As the most common channel, especially for customer interaction programs, voice allows for efficiency and an additional line of communication to enhance the customer’s journey.
<br/> <br/> We provide customized voice support in a variety of languages and have experience providing it to a wide range of end customers. Our industry-leading blended voice solutions for both inbound and outbound voice channels deliver best-in-class CX, cost of acquisition, and resolution.

                   </p>
                 </div>
               </div>
               <div className="col-md-4 col-xl-4 or1">
                 <div className="step-img">
                   <img
                     src={process.env.PUBLIC_URL + "/images/voice.png"}
                     alt="images"
                   />
                 </div>
               </div>
             </div>
           </div>
        
           <div className="row">
           <div className="col-xl-6">
             <div className="height-650">
               <img  className='height-auto'
                 src={process.env.PUBLIC_URL + "/images/mail.png"}
                 alt="blog images"
               />
             </div>
           </div>
           <div className="col-xl-6 mt-3">
             <div className="blog-banner-content">
             <h4>E-Mail</h4>
               <p>E-mail is a crucial channel for managing customer interactions. And your customer e-mail queries must be handled by a team of trained experts who can help you build better relationships with them. We have a highly skilled, trained and experienced team of call center professionals who are well-trained in the providing competent email support services. <br/><br/>
Our skilled email support professionals can answer all your emails with appropriate and prompt replies. Therefore, we leverage this experience to provide a wide range of customizable e-mail support services to support all your business service needs.
Our tested and proven e-mail support solutions have continuously bridged the gaps between businesses and their customers. Our agents use our unified desktop to manage e-mail interactions on the same screen where they manage interactions on the other channels. Therefore, you can be assured that all e-mails will be answered accurately, as our team of experts understands how to prioritize e-mails, resolve them based on the nature of the requests, and deliver a prompt and personalized e-mail support service.
You can save on investing in a customer support or call center team and you can concentrate more on your core business functions. Our email support services can help you benefit from increased customer service quality and availability.

               </p>
             </div>
           </div>
         </div>

         <div className="row">
               <div className="col-md-8 col-xl-8 or2">
                 <div className="step">
                   <div className="step-count">
                   
                   </div>
                   <h4>Chat</h4>
                   <p>
Live chat is a proactive solution for providing a cutting-edge online customer experience without interfering with their activities. It is one of the fastest & friendliest ways to capture, screen & convert website leads. As an all-in-one customer service solution, we create a personalized connection with your customers using our digital live chat support to provide them with the seamless support they are looking for.
<br/>
<br/> Our unified desktop with multi-chat service is not limited to only the chat platforms. Without toggling between screens, we provide a fully managed live chat service on your website. The live chat support allows the agents to simultaneously attend to multiple chats, enabling improved agent productivity and a better customer experience.

                   </p>
                 </div>
               </div>
               <div className="col-md-4 col-xl-4 or1">
                 <div className="step-img">
                   <img
                     src={process.env.PUBLIC_URL + "/images/chat.jpg"}
                     alt="images"
                   />
                 </div>
               </div>
             </div>
             <div className="row">
           <div className="col-xl-6">
             <div className="blog-banner-img mt-5 ">
               <img  className=''
                 src={process.env.PUBLIC_URL + "/images/sm.jpg"}
                 alt="blog images"
               />
             </div>
           </div>
           <div className="col-xl-6 mt-3">
             <div className="blog-banner-content">
             <h4>Social Media</h4>
               <p>Today’s customers expect excellent customer service from any organization, and social media offers a way to provide excellent customer service around the clock. Social media is an increasingly important customer service channel where customers expect a response within minutes. <br/> <br/>
We have extensive experience with all of the major social media platforms. As the content-moderation partner on social media platforms, we customize the content across your social media outlets to deliver your message and uniquely engage your fans and followers.

               </p>
             </div>
           </div>
         </div>
         </div>
       </div>
     </section>

    </div>
  )
}

export default Banking