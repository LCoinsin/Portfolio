import { Link } from "react-scroll";
import IMAGES from "../../assets/images/Images";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";

interface BannerProps {
  className?: string;
}

function Banner({ className }: BannerProps) {
  const { i18n, t } = useTranslation();

  return (
    <div
      className={`${className} flex flex-row items-center justify-center min-h-[500px] lg:justify-between `}
    >
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-small font-light sm:font-normal sm:text-medium">
          {t("banner_subtitle")}
        </h2>
        <h2 className="text-medium sm:text-large text-center font-extrabold lg:text-left">
          {i18n.language === "fr" ? (
            <>
              <span className="text-primary">{t("banner_title_2")}</span>
              <br />
              <Typewriter
                words={t("banner_title_1", { returnObjects: true })}
                loop={false}
                cursor={true}
                typeSpeed={150}
                deleteSpeed={80}
              />
            </>
          ) : (
            <>
              <Typewriter
                words={t("banner_title_1", { returnObjects: true })}
                loop={false}
                cursor={true}
                typeSpeed={150}
                deleteSpeed={80}
              />
              {/* {t("banner_title_1")} */}
              <br />
              <span className="text-primary">{t("banner_title_2")}</span>
            </>
          )}
        </h2>
        <p className="text-footnote sm:text-paragraphe  max-w-[450pt] text-center font-light lg:text-left">
          {t("banner_paragraph")}
        </p>
        <div className="h-8" />
        <Link to="myStory" smooth={true} duration={600}>
          <button className="text-paragraphe w-fit rounded-lg bg-black px-8 py-2 font-extralight text-white shadow-lg">
            {t("contact_title")}
          </button>
        </Link>
      </div>

      <div className="hidden lg:relative lg:flex lg:items-center">
        <div className="border-primary flex h-[350pt] w-[350pt] items-center justify-center rounded-full border">
          <img
            src={IMAGES.profile}
            alt="profile picture"
            className="w-[270pt] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
