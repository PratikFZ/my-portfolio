import React from "react";
import SkillBlock from "./SkillBlock";
import "./SkillSets.css";
import { SiKotlin,
         SiJavascript,
         SiFlask,
         SiTensorflow,
         SiMediapipe,
         SiAndroidstudio,
         SiAndroid,
         SiPytorch,
         SiPython, 
         SiDocker,
         SiGit,
         SiC,
         SiCplusplus,
         SiReact
       } from "react-icons/si";

const SkillSets = () => {
  const skills = [
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "MediaPipe", icon: <SiMediapipe /> },
    { name: "Android Studio", icon: <SiAndroidstudio /> },
    { name: "Android", icon: <SiAndroid /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Git", icon: <SiGit /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "React", icon: <SiReact />}
  ];

  return (
    <div className="skill-sets" id="skills">
        <h1 className="skill-sets-title">Skills</h1>
        <p className="skill-sets-description">
            Here are some of the technologies I have worked with:
        </p>
        <div className="skill-blocks">
            {skills.map((skill, index) => (
            <SkillBlock key={index} skill={skill} />
            ))}
        </div>
    </div>
  );
};

export default SkillSets;