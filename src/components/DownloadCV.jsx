import { AiOutlineFilePdf } from "react-icons/ai";

const DownloadCV = () => {
    const cvURL = "https://drive.google.com/file/d/1xdsMviM2clVtmq4c_no8NrK12pQ4j9zt/view?usp=sharing"

    return ( 
        <>
            <a href={cvURL} download="Hussein_Kteish_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn">Download CV <AiOutlineFilePdf /> </button>
            </a>
        </>
     );
}
 
export default DownloadCV;