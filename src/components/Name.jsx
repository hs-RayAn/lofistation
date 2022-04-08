import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Name = ({
    name,
    link
}) => {
    return (
        <div style={{display: 'flex'}}>
            <a href={link} target="_blank" rel="noreferrer"
            >
                <FontAwesomeIcon icon={faYoutube} size='2x' color='#fff'/>
                
            </a>
            <a href={link} target="_blank" rel="noreferrer"><p className='title-channel' style={{paddingTop:'5.5%'}}>{name}</p></a>
        </div>
    )
};

export default Name;