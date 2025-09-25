import React from 'react'
import {SKILLS} from '../../utills/Data/Data'

const Skills = () => {
  return (
    <section className="w-full-xl bg-zinc-950 px-7 mx-auto py-5 md:py-20" id="skils">
      <div className="bg-gradient-to-br from bg-zinc-950 to-zinc-950 ">
        <h1 className="text-4xl md:text-4xl text-gray-100 text-center justify-center font-bold pb-2 md:pb-2">
          Skills
        </h1>
        <p className="text-xl font-extralight text-gray-100 py-2 mt-2 text-center justify-center md:flex-item-center text-center justify-center leading-5 pb-4">
          This is are my skills which one I already have a few skills between like
          </p>
        <div className="grid grid-cols-1 md:grid-cols2 md:grid-cols-3 gap-3">
          {SKILLS.map((skill) => (
            <SkillsCard
            key={skill.id}
            icon={skill.icon}
            iconProps={skill.iconProps}
            title={skill.title}
            comments={skill.comments}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsCard = ({icon: Icon, iconProps, title, comments}) => {
  return (
    <div className="bg-slate-900 rounded border border-blue-950 p-5">
      <div className="">
        <p className="text-base text-xl font-medium text-gray-100 text-center justify-center">
          {title}
        </p>
        <center><Icon className="text-primary text-3xl"/></center>
      </div>

      <p className="text-xl font-medium text-gray-100 text-justify justify-between">{comments}</p>
    </div>
    
  );
};


export default Skills;