import { frontendSkillsIcons } from "../../../Data/homepage";

const Skill = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {frontendSkillsIcons.map((skill, index) => (
        <div key={index} className="relative group flex flex-col items-center">
          <img
            src={skill.icon}
            alt={skill.name}
            className="h-[45px] w-[45px]"
          />

          {/* Tooltip */}
          <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center mb-2">
            <div className="capsule ">
              {skill.name}
            </div>
            {/* Arrow */}
            <div className="w-3 h-3 border-white border-2 rotate-45 -mt-2 z-0 bg-blue-50"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
