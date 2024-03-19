import { useTranslation } from "react-i18next";

function MyStory({ id }: { id: string }) {
  const { t } = useTranslation();

  return (
    <div id={id}>
      <h1 className="text-medium sm:text-large text-black">
        {t("myStory_title")}
        <span className="text-primary">.</span>
      </h1>
      <div className="h-[30px] sm:h-[60px]" />
      <div className="text-footnote sm:text-paragraphe text-justify font-extralight">
        <p>{t("myStory_p1")}</p>
        <br />
        <p>{t("myStory_p2")}</p>
      </div>
    </div>
  );
}

export default MyStory;
