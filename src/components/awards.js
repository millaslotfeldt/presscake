

const Awards = (props) => {

    if (props.awards == null) {
        return null; 
    }

    let awards = props.awards.map((award, index) =>
        <div className="award">
            <img 
                src={process.env.PUBLIC_URL + '/data/img/awards/' + award.image}
            />
            <h4 className="text-light">{award.name}</h4>
            <p className="text-light">{award.project}</p>
        </div>
    );

    return (
        <div id="awards">
            <h2 className="text-light">Awards</h2>
            <hr></hr>
            <div className="awards-list">
            {awards}
            </div>
        </div>
    );
};


export default Awards;