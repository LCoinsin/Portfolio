import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import Experience from "../../components/Experiences";
import Header from "../../components/Header";
import MyStory from "../../components/MyStory";
import Skills from "../../components/Skills";

const sections = [
  {
    name: "Experience",
    link: "#experience",
    component: <Experience />,
  },
  {
    name: "Skills",
    link: "#skills",
    component: <Skills />,
  },
  {
    name: "About me",
    link: "#myStory",
    component: <MyStory />,
  },
  {
    name: "Contact",
    link: "#contact",
    component: <Contact />,
  },
];

function Portfolio() {
  return (
    <div className="w-7xl mx-auto max-w-7xl px-10 font-mplus">
      <div className="flex flex-col h-screen max-h-screen text-black">
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
