import React , {useState,useRef} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}

function ContactForm({props , formStyle}) {
    const [ result,showresult ] = useState(false);

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs
    //     .sendForm(
    //         'service_p4x3hv8', 
    //         'template_jgfr42f', 
    //         e.target, 
    //         'user_jrfTH2e0Ely35ZCVFdT9S'
    //     )
    //     .then((result) => {
    //         console.log(result.text);
    //         }, 
    //         (error) => {
    //             console.log(error.text);
    //         }
    //     );
    //     e.target.reset();
    //     showresult(true);
    // };

    // setTimeout(() => {
    //     showresult(false);
    // }, 5000);
    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycby93_5ID1TGmw8GxhIn_8UbkvGzhfDIQFiUz8SkA1rN0HGumTvUXCd0Vn2Zvi1xA136/exec"
    // const [loading, setLoading] = useState(false)
    
    const handleSubmit = (e) =>{
      e.preventDefault()
      showresult(true)
    
      fetch(scriptUrl, {
        mode: 'no-cors',
        method: 'POST',
        body : new FormData(formRef.current),
      }).then (res => {
        console.log(res);
        console.log("Successful");
        showresult(false)
      })
      .catch(err => console.log(err))
      e.target.reset();
    }

    return (
        <form className={`${formStyle}`} ref={formRef} name="Sheet1"  onSubmit={handleSubmit}>
            <div className="form-group ">
                <input 
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                className='bg-outline-primary'
                />
            </div>

            <div className="form-group">
                <input 
                type="email"
                name="Email"
                placeholder="Email Address"
                required
                />
            </div>

            <div className="form-group">
                <input 
                type="text"
                name="Phone"
                placeholder="Phone Number"
                required
                />
            </div>


            <div className="form-group">
                <input 
                type="text"
                name="Subject"
                placeholder="Subject"
                required
                />
            </div>

            <div className="form-group">
                <textarea 
                name="Message"
                placeholder="Your Message"
                required
                >
                </textarea>
            </div>

            <div className="form-group">
                <input type='submit' className="btn-default btn-large" value='Submit Now'/>
            </div> 

            <div className="form-group">
                {result ? <Result /> : null}
            </div> 
        </form>
    )
}
export default ContactForm;
