import { CornerRightDown, Mail, Phone } from 'lucide-react';
import '../CSS/Contact.css'
import { MdSend } from 'react-icons/md';
import { useState } from 'react';
import emailjs  from 'emailjs-com';
import { motion } from "framer-motion"

const Contact = () => {
    const [ successMessage, setSuccessMessage ] = useState("");
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        message: ''
    })
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = "service_r26lurf";
        const templateID = "template_btw5a1w";
        const userID = "DQ6BjSCdBqcdkzYY7";

        emailjs.send(serviceID, templateID, formData, userID)
        .then((response) => {
            console.log("Email sent successfully!", response.status, response.text);
            setFormData({ name: '', email: '', message: '' }); // Clear form
            setSuccessMessage("Message sent successfully! ✅");
            
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000)
        })
        .catch((error) => {
            console.error("Email sending failed:", error);
            alert("Failed to send message. Please try again.");
        });
    }

    return ( 
        <>
            {successMessage && <div className='success-message'>{successMessage}</div>}
            <motion.div 
                initial={{ opacity: 0 , y: -70}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                className="top-header"
            >
                <h1>Get in touch</h1>
                <p><span className='emoji'>💡</span> Do you have a project in your mind, contact me here</p>
                <p><span className='emoji'>✍️</span> I’d love to hear your thoughts! Whether it’s feedback on my work or just a quick hello, feel free to share your message.</p>
            </motion.div>

            <div className='row'>
                <motion.div 
                    initial={{ x: -100 , opacity: 0}}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                    className="col"
                >
                    <div className="contact-info">
                        <h2>Find Me <CornerRightDown className='contact-icon'/> </h2>
                        <p> <Mail className='contact-icon' /> Email: hseinkteish21@gmail.com</p>
                        <p> <Phone className='contact-icon'/> Tel: +961 76 626 035</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ x: 100 , opacity: 0}}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
                    className='col'
                >
                    <form onSubmit={handleSubmit} className='form-control'>
                        <div className='form-inputs'>
                            <input 
                                type="text" 
                                id='Name' 
                                placeholder="Name" 
                                className='input-field' 
                                name='name' 
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <input 
                                type="email" 
                                id='Email' 
                                placeholder="Email" 
                                className='input-field' 
                                name='email' 
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='text-area'>
                            <textarea 
                                id='Message' 
                                placeholder="Message" 
                                name='message' 
                                value={formData.message} 
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        
                        <div className='form-button'>
                            <button type='submit' className="btn" >
                                Send <MdSend className='send-icon'/> 
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </>
     );
}
 
export default Contact;