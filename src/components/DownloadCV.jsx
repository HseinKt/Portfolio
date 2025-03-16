import { AiOutlineFilePdf } from "react-icons/ai";

const DownloadCV = () => {
    const cvURL = "/Portfolio/Hussein_Kteish_Resume.pdf"

    return ( 
        <>
            <a href={cvURL} download="Hussein_Kteish_Resume.pdf">
                <button className="btn">Download CV <AiOutlineFilePdf /> </button>
            </a>
        </>
     );
}
 
export default DownloadCV;