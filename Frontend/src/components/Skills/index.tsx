import { useTranslation } from "react-i18next";

const skillsList = [
  {
    title: "Langage",
    skills: ["Javascript", "Python", "Bash"],
  },
  {
    title: "Backend",
    skills: ["NodeJS", "Flask", "Postgresql", "Supabase"],
  },
  {
    title: "Frontend",
    skills: ["Typescript", "ReactJS", "NextJS", "TailwindCSS"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Gitlab", "Notion"],
  },
];

function Skills({ id }: { id: string }) {
  const { t } = useTranslation();

  return (
    <div id={id}>
      <h1 className="text-medium sm:text-large text-black">
        {t("skills_title")}
        <span className="text-primary">.</span>
      </h1>
      <div className="h-[30px] sm:h-[60px]" />
      <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2 lg:grid-cols-4">
        {skillsList.map((skill, index) => (
          <div key={index}>
            <h2 className="text-medium font-medium">{skill.title}</h2>
            <ul className="text-paragraphe font-extralight">
              {skill.skills.map((skill, index2) => (
                <li key={index2}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
