import { useState } from "react";
import Markdown from "react-markdown";
import { exotec, mbda } from "./descriptions";

const ExperienceList = [
  {
    id: 1,
    company: "Exotec",
    position: "Python Developer / QA Engineer",
    date: "October 2023 - Present",
    description: exotec,
  },
  {
    id: 2,
    company: "MBDA",
    position: "Python Developer",
    date: "September 2020 - August 2023",
    description: mbda,
  },
];

function Experience() {
  const [ExperienceDetails, setExperienceDetails] = useState(ExperienceList[0]);

  const changeExperience = (id: number) => {
    const newExperience = ExperienceList.find(
      (experience) => experience.id === id
    );
    if (newExperience) {
      setExperienceDetails(newExperience);
    }
  };

  return (
    <div>
      <h1 className="text-large text-black">
        Experience<span className="text-primary">.</span>
      </h1>
      <div className="h-[60px]" />
      <div className="w-full grid grid-cols-12">
        <div className="col-span-2">
          {ExperienceList.map((experience) => (
            <div
              className="text-small"
              key={experience.id}
              onClick={() => changeExperience(experience.id)}
            >
              <div className="flex flex-row">
                <div
                  className={`${
                    experience.id === ExperienceDetails.id
                      ? "bg-primary"
                      : "bg-black"
                  } h-[50px] w-[3px] mr-5`}
                />
                <h2 className="hover:text-primary duration-200	">
                  {experience.company}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-10">
          <ExperienceItem
            company={ExperienceDetails.company}
            position={ExperienceDetails.position}
            date={ExperienceDetails.date}
            description={ExperienceDetails.description}
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;

interface ExperienceItemProps {
  company: string;
  position: string;
  date: string;
  description: string;
}

const ExperienceItem = ({
  company,
  position,
  date,
  description,
}: ExperienceItemProps) => {
  return (
    <>
      <h2 className="text-medium font-light">
        {position} <span className="text-primary">@ {company}</span>
      </h2>
      <p className="text-footnote font-extralight">{date}</p>
      <div className="h-[20px]" />
      <Markdown className="font-light prose min-w-full">{description}</Markdown>
    </>
  );
};
