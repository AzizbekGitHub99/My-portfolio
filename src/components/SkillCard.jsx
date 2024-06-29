import "./SkillCard.scss";

const SkillCard = ({skill}) => {
  console.log(skill);
  return (
    <div className="card-box">
      <div className="skill-card">
        <div className="card-front">
          <h4>{skill.name}</h4>
          <div className="card-icon">
            <img src={skill.image} alt={skill.name} />
          </div>
        </div>
        <div className="card-back">
          <h4>{skill.shortName}</h4>
          <div className="bar">
            <div
              style={{ width: "80%", backgroundColor: skill.color }}
              className="in-bar"
            >
              {skill.procent}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
