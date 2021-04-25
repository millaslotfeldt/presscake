
import Logo from './logo'; 

const Header = (props) => {

    return (
        <div class="header" style={{ backgroundImage: `url(${props.headerSource})`, borderBottom: `1em solid ${props.accentColor}` }}>
            <Logo source={props.logoSource} />
        </div>
    );
};


export default Header;


