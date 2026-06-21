import '../CSS/ResumeSection.css';
import { motion } from "framer-motion";
import { FileText, Eye, Download, Layers, Shield } from "lucide-react";

const ResumeSection = () => {
    const resumes = [
        {
            title: "Full-Stack Developer Resume",
            icon: <Layers size={22} />,
            description: "Highlights expertise in React, Next.js, Node.js, database designs, REST APIs, and modern frontend deployment systems.",
            viewLink: "/Portfolio/images/resumes/Hussein_Kteish_FullStack_Developer_Resume.pdf",
            downloadName: "Hussein_Kteish_FullStack_Developer_Resume.pdf"
        },
        {
            title: "Cybersecurity Resume",
            icon: <Shield size={22} />,
            description: "Highlights OSINT skills, networking infrastructure audits, penetration testing tools, CompTIA/CEH credentials, and vulnerability analysis.",
            viewLink: "/Portfolio/images/resumes/Hussein_Kteish_Cyber_Security_Resume.pdf",
            downloadName: "Hussein_Kteish_Cyber_Security_Resume.pdf"
        }
    ];

    return ( 
        <div>
            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="top-header"
            >
                <h1>Curriculum Vitae</h1>
                <p>Choose and access target resume variants tailormade for technical development or cybersecurity teams.</p>
            </motion.div>

            <div className="resume-grid">
                {resumes.map((resume, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.15 }}
                        className="resume-card"
                    >
                        <div className="resume-header">
                            <h3>{resume.icon} {resume.title}</h3>
                            <p>{resume.description}</p>
                        </div>

                        <div className="resume-preview-box">
                            <p>
                                <FileText size={48} style={{ opacity: 0.25, marginBottom: '0.75rem' }} />
                                <br />
                                Secure PDF Document Ready
                            </p>
                        </div>

                        <div className="resume-actions">
                            <a href={resume.viewLink} target="_blank" rel="noopener noreferrer">
                                <button className="btn">
                                    <Eye size={16} /> View
                                </button>
                            </a>
                            <a href={resume.viewLink} download={resume.downloadName}>
                                <button className="btn btn-primary">
                                    <Download size={16} /> Download
                                </button>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
     );
}
 
export default ResumeSection;
