import React, { useState } from 'react';
import '../CSS/Contact.css';
import { MdSend } from 'react-icons/md';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <div id="contact" className="section">
            {successMessage && <div className='success-message'>{successMessage}</div>}
            
            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="top-header"
            >
                <h1>Get In Touch</h1>
                <p>Have an idea or a query? Drop me a message and let's start a conversation.</p>
            </motion.div>

            <div className='contact-grid'>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="contact-info-card glass-card"
                >
                    <h3>Contact Information</h3>
                    
                    <div className="contact-method-item">
                        <div className="contact-method-icon">
                            <Mail size={18} />
                        </div>
                        <div className="contact-method-detail">
                            <h4>Email</h4>
                            <p>hseinkteish21@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-method-item">
                        <div className="contact-method-icon">
                            <Phone size={18} />
                        </div>
                        <div className="contact-method-detail">
                            <h4>Telephone</h4>
                            <p>+961 76 626 035</p>
                        </div>
                    </div>

                    <div className="contact-method-item">
                        <div className="contact-method-icon">
                            <MapPin size={18} />
                        </div>
                        <div className="contact-method-detail">
                            <h4>Location</h4>
                            <p>Beirut, Lebanon</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <form onSubmit={handleSubmit} className='contact-form'>
                        <div className='form-row'>
                            <div className="form-group">
                                <label htmlFor="Name" className="form-label">Full Name</label>
                                <input 
                                    type="text" 
                                    id='Name' 
                                    placeholder="Your Name" 
                                    className='form-input' 
                                    name='name' 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="Email" className="form-label">Email Address</label>
                                <input 
                                    type="email" 
                                    id='Email' 
                                    placeholder="your@email.com" 
                                    className='form-input' 
                                    name='email' 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="Message" className="form-label">Message</label>
                            <textarea 
                                id='Message' 
                                placeholder="Write your message here..." 
                                className="form-textarea"
                                name='message' 
                                value={formData.message} 
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        
                        <div>
                            <button type='submit' className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
                                Send Message <MdSend style={{ transform: 'rotate(-45deg)', marginLeft: '4px' }} /> 
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
     );
}
 
export default Contact;