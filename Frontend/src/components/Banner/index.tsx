import IMAGES from "../../images/Images";
import { useTranslation } from "react-i18next";

interface BannerProps {
  className?: string;
}

function Banner({ className }: BannerProps) {
  const { i18n, t } = useTranslation();

  return (
    <div
      className={`${className} flex items-center justify-center lg:justify-between flex-row overflow-x-hidden `}
    >
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-paragraphe sm:text-medium">
          {t("banner_subtitle")}
        </h2>
        <h2 className="text-small sm:text-large font-extrabold text-center lg:text-left">
          {i18n.language === "fr" ? (
            <>
              <span className="text-primary">{t("banner_title_2")}</span>
              <br />
              {t("banner_title_1")}
            </>
          ) : (
            <>
              {t("banner_title_1")}
              <br />
              <span className="text-primary">{t("banner_title_2")}</span>
            </>
          )}
        </h2>
        <p className="text-footnote sm:text-paragraphe  max-w-[450pt] font-light text-center lg:text-left">
          {t("banner_paragraph")}
        </p>
        <div className="h-8" />
        <button className="bg-black text-white w-fit py-2 px-8 rounded-lg text-paragraphe font-extralight shadow-lg">
          Contact me
        </button>
      </div>

      <div className="hidden lg:relative lg:flex lg:items-center">
        <div className="w-[350pt] h-[350pt] border border-primary rounded-full flex justify-center items-center">
          <img
            src={IMAGES.profile}
            alt="profile picture"
            className="rounded-full w-[270pt]"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
