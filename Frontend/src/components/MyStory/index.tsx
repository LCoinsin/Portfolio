import { useTranslation } from "react-i18next";

function MyStory() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-medium sm:text-large text-black">
        My Story<span className="text-primary">.</span>
      </h1>
      <div className="h-[30px] sm:h-[60px]" />
      <div className="text-footnote sm:text-paragraphe font-extralight text-justify">
        <p>{t("myStory_p1")}</p>
        <br />
        <p>{t("myStory_p2")}</p>
      </div>
    </div>
  );
}

export default MyStory;
