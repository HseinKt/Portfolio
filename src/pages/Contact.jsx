import { CornerRightDown, Mail, Phone } from 'lucide-react';
import '../CSS/Contact.css'
import { MdEmail } from 'react-icons/md';
const Contact = () => {
    return ( 
        <>
            <div className="top-header">
                <h1>Get in touch</h1>
                <p>Do you have a project in your mind, contact me here</p>
                <button class="button">Click Me</button>

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
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message" rows="5"></textarea>
                        <button className="btn blue-btn">Send</button>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default Contact;