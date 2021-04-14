

import {Link} from 'react-router-dom';

const Logo = () => {

    const logoText = "";

    return (
        <div class="logo">
            <Link to="/">
                <img src={process.env.PUBLIC_URL + '/data/img/logo.jpg'} 
                    width="100%"
                />
                {logoText}
            </Link>
        </div>
    );
};


export default Logo;


