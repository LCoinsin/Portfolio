import { useEffect, useState } from "react";
import FrenchFlag from "../../assets/images/FrenchFlag";
import EnglishFlag from "../../assets/images/EnglishFlag";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

interface HeaderProps {
  headerSection: { name: string; link: string }[];
}

function Header({ headerSection }: HeaderProps) {
  return (
    <header className="text-small mx-3 flex h-16 items-center justify-between">
      <div>
        LeoCsn<span className="text-primary">.</span>
      </div>
      <div className="hidden lg:block">
        <ul className="text-tyni flex flex-row gap-10">
          {headerSection.map((item, index) => (
            <li key={index} className="hover:text-primary">
              <Link to={item.link} smooth={true} duration={600}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Select langage */}
      <div>
        <LangageTest />
      </div>
    </header>
  );
}

export default Header;

function LangageTest() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [activeLangage, setActiveLangage] = useState(i18n.language);

  const languages = [
    {
      label: "FR",
      code: "fr",
      flag: <FrenchFlag className="h-5 rounded-full" />,
    },
    {
      label: "EN",
      code: "en",
      flag: <EnglishFlag className="h-5 rounded-full" />,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".text-footnote")) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="text-footnote">
      <div>
        <svg viewBox="0 0 512 512" className="h-5 rounded-full">
          <path fill="#012169" d="M0 0h512v512H0z" />
          <path
            fill="#FFF"
            d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
          />
          <path
            fill="#C8102E"
            d="m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"
          />
          <path fill="#FFF" d="M176 0v512h160V0zM0 176v160h512V176z" />
          <path fill="#C8102E" d="M0 208v96h512v-96zM208 0v512h96V0z" />
        </svg>
      </div>
      <button
        className="flex flex-row items-center gap-2 px-4"
        onClick={() => setOpen(!open)}
      >
        {languages.find((lang) => lang.code === activeLangage)?.flag}
        {languages.find((lang) => lang.code === activeLangage)?.label}
      </button>
      {open ? (
        <div
          className="absolute mt-2 w-auto rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
        >
          {languages
            .filter((lang) => lang.code !== activeLangage)
            .map((lang, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-2 px-4 py-2 duration-200 hover:bg-slate-100"
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setActiveLangage(lang.code);
                  setOpen(false);
                }}
              >
                {lang.flag}
                {lang.label}
              </div>
            ))}
        </div>
      ) : null}
    </div>
  );
}
