import { AiOutlineFilePdf } from "react-icons/ai";

const DownloadCV = () => {
    const cvURL = "https://drive.google.com/file/d/1R97wyrkZt8CAPu7NG-vPY28Pv_oVjoYU/view?usp=sharing"

    return ( 
        <>
            <a href={cvURL} download="Hussein_Kteish_Resume.pdf">
                <button className="btn">Download CV <AiOutlineFilePdf /> </button>
            </a>
        </>
     );
}
 
export default DownloadCV;