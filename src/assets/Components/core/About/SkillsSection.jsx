import { skills } from "../../../Data/aboutpage";

const SkillsSection = () => {
  const { frontend, backend, tools } = skills;

  // Circle settings
  const circleRadius = 20;
  const strokeWidth = 4;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const pageData = [
    {
      title: "Frontend Skills",
      list: frontend,
      color: "text-blue-400",
    },
    { title: "Backend Skills", list: backend, color: "text-green-400" },
    { title: "Tools", list: tools, color: "text-orange-500" },
  ];
  return (
    <section className="space-y-12" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="sr-only">
        Skills Overview
      </h2>

      {pageData.map((section, secIdx) => (
        <article key={secIdx} className="flex flex-col gap-y-6">
          <h3 className="text-center text-4xl Bebas inline-block scale-x-150">
            {section.title}
          </h3>

          <ul className="flex gap-6 flex-wrap justify-center">
            {section.list.map((skill, index) => (
              <li
                key={index}
                className="flex flex-col items-center gap-3 bg-[#ffffff0a] p-6 rounded-xl hover:scale-110 hover:bg-[#ffffff14] transition-transform duration-300 relative group"
              >
                {/* Icon with aria-label */}
                <skill.icon
                  aria-label={`${skill.name} icon`}
                  role="img"
                  className={`text-6xl ${section.color} drop-shadow-lg`}
                />

                {/* Circular indicator */}
                <div
                  className="absolute top-3 right-3 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden="true"
                >
                  <svg
                    className="w-12 h-12"
                    viewBox={`0 0 ${2 * (circleRadius + strokeWidth)} ${
                      2 * (circleRadius + strokeWidth)
                    }`}
                  >
                    <circle
                      cx={circleRadius + strokeWidth}
                      cy={circleRadius + strokeWidth}
                      r={circleRadius}
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth={strokeWidth}
                      fill="transparent"
                    />
                    <circle
                      cx={circleRadius + strokeWidth}
                      cy={circleRadius + strokeWidth}
                      r={circleRadius}
                      stroke="#34D399"
                      strokeWidth={strokeWidth}
                      strokeDasharray={circleCircumference}
                      strokeDashoffset={
                        circleCircumference -
                        (circleCircumference * skill.understanding) / 100
                      }
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-500 ease-in-out"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                    {skill.understanding}%
                  </span>
                </div>

                {/* Skill name */}
                <p className="text-sm font-medium text-richblack-200 tracking-wide">
                  {skill.name}
                </p>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default SkillsSection;
