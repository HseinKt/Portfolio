import { CornerRightDown, Mail, Phone } from 'lucide-react';
import '../CSS/Contact.css'
import { MdSend } from 'react-icons/md';
import { useState } from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    })
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

    }

    return ( 
        <>
            <div className="top-header">
                <h1>Get in touch</h1>
                <p>Do you have a project in your mind, contact me here</p>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className="contact-info">
                        <h2>Find Me <CornerRightDown className='contact-icon'/> </h2>
                        <p> <Mail className='contact-icon' /> Email: hseinkteish21@gmail.com</p>
                        <p> <Phone className='contact-icon'/> Tel: +961 76 626 035</p>
                    </div>
                </div>

                <div className='col'>
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
                                id='Description' 
                                placeholder="Message" 
                                name='description' 
                                value={formData.description} 
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
                </div>
            </div>
        </>
     );
}
 
export default Contact;