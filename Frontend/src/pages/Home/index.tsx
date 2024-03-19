import { useTranslation } from "react-i18next";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Experience from "../../components/Experiences";
import Header from "../../components/Header";
import MyStory from "../../components/MyStory";
import Skills from "../../components/Skills";

function Portfolio() {
  const { t } = useTranslation();
  const sections = [
    {
      name: t("experience_header_title"),
      link: "experience",
      component: <Experience id="experience" />,
    },
    {
      name: t("skills_header_title"),
      link: "skills",
      component: <Skills id="skills" />,
    },
    {
      name: t("myStory_header_title"),
      link: "myStory",
      component: <MyStory id="myStory" />,
    },
    {
      name: t("contact_header_title"),
      link: "contact",
      component: <Contact id="contact" />,
    },
  ];

  return (
    <div className="w-7xl font-mplus mx-auto max-w-7xl px-10">
      <div className="flex h-screen max-h-screen flex-col text-black">
        <Header headerSection={sections} />
        <Banner className="flex-grow" />
      </div>
      {sections.map((section, index) => (
        <div key={index} id={section.link}>
          {section.component}
          <div className="h-[120px]" />
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
