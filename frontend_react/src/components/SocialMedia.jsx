import { BsLinkedin} from 'react-icons/bs';
import {Link} from 'react-router-dom';


export const SocialMedia = () => {

    return (
        <div className='app__social'>
            <div>
            <Link to="https://www.linkedin.com/in/linatamaracontrerasglz">
                    <BsLinkedin/>
                </Link>
            </div>
        </div>
    )
}
