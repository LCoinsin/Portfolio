import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { exotec, mbda } from "./descriptions";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();
  const ExperienceList = [
    {
      id: 1,
      company: "Exotec",
      position: t("experience_exotec_position"),
      date: "October 2023 - Present",
      description: t("experience_exotec_description"),
    },
    {
      id: 2,
      company: "MBDA",
      position: t("experience_mbda_position"),
      date: "September 2020 - August 2023",
      description: t("experience_mbda_description"),
    },
  ];
  const [ExperienceDetails, setExperienceDetails] = useState(ExperienceList[0]);

  useEffect(() => {
    // Reload ExperienceList with correct language
    const updatedExperienceList = [
      {
        id: 1,
        company: "Exotec",
        position: t("experience_exotec_position"),
        date: "October 2023 - Present",
        description: t("experience_exotec_description"),
      },
      {
        id: 2,
        company: "MBDA",
        position: t("experience_mbda_position"),
        date: "September 2020 - August 2023",
        description: t("experience_mbda_description"),
      },
    ];
    setExperienceDetails(updatedExperienceList[0]);
  }, [t]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

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
      <h1 className="text-medium sm:text-large text-black">
        Experience<span className="text-primary">.</span>
      </h1>
      <div className="h-[60px]" />
      <div className="w-full grid grid-cols-12">
        {windowWidth >= 1024 ? (
          <SelectorExperience
            ExperienceList={ExperienceList}
            changeExperience={changeExperience}
            ExperienceDetails={ExperienceDetails}
          />
        ) : (
          <div className="col-span-3">
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              className="border rounded-lg px-4 py-1 min-w-full mb-3"
              onChange={(e) => changeExperience(Number(e.target.value))}
            >
              {ExperienceList.map((experience: any) => (
                <option key={experience.id} value={experience.id}>
                  {experience.company}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="col-span-12 lg:col-span-10">
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

const SelectorExperience = ({
  ExperienceList,
  changeExperience,
  ExperienceDetails,
}: any) => {
  return (
    <div className="col-span-2">
      {ExperienceList.map((experience: any) => (
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
  );
};

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
      <h2 className="text-small md:text-medium font-light">
        {position} <span className="text-primary">@ {company}</span>
      </h2>
      <p className="text-footnote md:text-paragraphe font-thin">{date}</p>
      <div className="h-[20px]" />
      <Markdown className="font-light text-footnote md:text-paragraphe text-black prose min-w-full">
        {description}
      </Markdown>
    </>
  );
};
