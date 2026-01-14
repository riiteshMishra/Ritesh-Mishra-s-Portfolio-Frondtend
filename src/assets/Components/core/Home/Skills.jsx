const Skill = () => {
  const skills = [
    {
      id: "1",
      name: "MongoDB",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
    },
    {
      id: "2",
      name: "ExpressJs",
      icon: "https://img.icons8.com/ios/100/express-js.png",
    },
    {
      id: "3",
      name: "ReactJs",
      icon: "https://img.icons8.com/plasticine/100/react.png",
    },
    {
      id: "4",
      name: "NodeJs",
      icon: "https://img.icons8.com/fluency/96/node-js.png",
    },
  ];

  return (
    <div className="flex gap-6 flex-wrap justify-around py-6 items-center">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="flex flex-col items-center bg-[#ffffff] shadow-md rounded-xl p-4 w-28 hover:scale-105
       transition-all duration-200 relative group"
        >
          <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
          <p className="text-sm mt-2 font-medium text-gray-700">{skill.name}</p>

          {/* tooltip */}
          <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center mb-2">
            <div className="capsule ">{skill.name}</div>
            {/* Arrow */}
            <div className="w-3 h-3 border-white border-2 rotate-45 -mt-2 z-0 bg-blue-50"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;

// {frontendSkillsIcons.map((skill, index) => (
//       <div key={index} className="relative group flex flex-col items-center">
//         <img
//           src={skill.icon}
//           alt={skill.name}
//           className="h-[45px] w-[45px]"
//         />

//         {/* Tooltip */}
//         <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center mb-2">
//           <div className="capsule ">
//             {skill.name}
//           </div>
//           {/* Arrow */}
//           <div className="w-3 h-3 border-white border-2 rotate-45 -mt-2 z-0 bg-blue-50"></div>
//         </div>
//       </div>
//     ))}
