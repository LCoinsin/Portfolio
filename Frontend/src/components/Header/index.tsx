import { useEffect, useState } from "react";
import IMAGES, { EnglishFlag, FrenchFlag } from "../../images/Images";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  headerSection: { name: string; link: string }[];
}

function Header({ headerSection }: HeaderProps) {
  return (
    <header className="h-16 flex justify-between items-center mx-3 text-small">
      <div>
        LeoCsn<span className="text-primary">.</span>
      </div>
      <div className="hidden lg:block">
        <ul className="flex flex-row gap-10 text-tyni">
          {headerSection.map((item, index) => (
            <li key={index} className="hover:text-primary">
              <a href={item.link}>{item.name}</a>
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
                className="flex flex-row items-center gap-2 px-4 py-2 hover:bg-slate-100 duration-200"
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
