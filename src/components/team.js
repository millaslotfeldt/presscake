

const Team = (props) => {

    let team = props.team.map((member, index) =>
        <div className="member">
                <h4 className="text-light">
                    <a href={member.url} target="_blank">
                        {member.name}
                    </a>
                </h4>
            <p className="text-light">
                {member.description}
            </p>
        </div>
    );

    return (
        <div id="team">
            <h2 className="text-light">Team</h2>
            <hr></hr>
            <div className="links-list">
                {team}
            </div>
        </div>
    );
};


export default Team;