

const Header = () => {

    return (
        <div class="header">
            <img 
                src={process.env.PUBLIC_URL + '/data/img/banner.jpg'}
                width="100%" 
                alt=""
            />

        </div>
    );
};


export default Header;


