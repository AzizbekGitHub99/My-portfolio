import React from "react";
import "./MySkills.scss";
import {mySkills} from "../../constants";
import SkillCard from "../../components/SkillCard";

const MySkills = () => {
  return (
    <div id="mySkills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills">
          {mySkills.map(skill => <SkillCard skill={skill} key={skill.id}/>)}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
