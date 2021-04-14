

const Team = (props) => {

    let team = props.team.map((member, index) =>
        <p>{member.title}</p>
    );

    return (
        <div id="team">
            <h3>Team</h3>
            {team}
        </div>
    );
};


export default Team;