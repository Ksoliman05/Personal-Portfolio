import React from 'react'
import "./contact.css"
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ae6bc051-918b-4b22-b17a-1bf89f9a010d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            console.log("Success", res);
        }
    };

    return (
    <div id = "contact" className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Whether you have a question, a project idea, a collaboration in mind, or just want to say hello — I'm all ears. Drop me a note—I’d love to hear from you and will reply soon.</p>
                <hr />
                <div className="contact-details">
                    <div className="contact-detail"><img src={mail_icon} /> <p>ks2325@njit.edu</p></div>
                    <div className="contact-detail"><img src={location_icon} /> <p>NJ, United States</p></div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name' />
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email' />
                <label htmlFor=''>Enter your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type = "submit" className="contact-submit">Submit now</button>                                 
            </form>

        </div>
    </div>
  )
}

export default Contact
