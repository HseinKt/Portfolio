import { AiOutlineFilePdf } from "react-icons/ai";

const DownloadCV = () => {
    const cvURL = "../public/Hussein_Kteish_Resume.pdf"

    return ( 
        <>
            <a href={cvURL} download>
                <button className="btn">Download CV <AiOutlineFilePdf /> </button>
            </a>
        </>
     );
}
 
export default DownloadCV;