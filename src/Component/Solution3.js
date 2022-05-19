import React from 'react';
import './Styles.css'
import pic from "../Component/images/download.jpg"
import { BiCheck } from "react-icons/bi";
import { FaFacebookF} from "react-icons/fa";
import { AiOutlineTwitter} from "react-icons/ai";
import { AiOutlineGooglePlus} from "react-icons/ai";
import { AiFillLinkedin} from "react-icons/ai";
import { AiOutlineBehance} from "react-icons/ai";

const Solution3 = () => {
    return (
        <div className='main-body'>
            <div className='body'>
            <div className='image-div'>
            <img src={pic} alt={pic}  className="profile-pic"/>
            <BiCheck  className='profile-icon'/>
            </div>
            <div className='test-div'>
                <h4>Prince Antwi</h4>
                <p className='test-para'>Some quick example text to build on the card title and make up the bulk of the card's content </p>
                <div>
                <AiFillLinkedin className='profile-icons' />
                <AiOutlineBehance className='profile-icons'  />
                <AiOutlineTwitter className='profile-icons'  />
                <AiOutlineGooglePlus className='profile-icons' />
                 <FaFacebookF className='profile-icons'  />
                </div>
            </div>

            </div>
        </div>
    );
}

export default Solution3;
