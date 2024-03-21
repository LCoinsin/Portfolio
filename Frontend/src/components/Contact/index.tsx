import { useTranslation } from "react-i18next";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

function Contact({ id }: { id: string }) {
  const { t } = useTranslation();

  return (
    <div id={id}>
      <h1 className="text-medium sm:text-large text-black">
        {t("contact_title")}
        <span className="text-primary">.</span>
      </h1>
      <div className="h-[60px]" />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 flex flex-col justify-center gap-y-2 px-2 pr-8">
          <MdEmail size={30} />
          <h3 className="text-small font-normal">Email</h3>
          {/* <p className="text-footnote font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, esse
            nam
          </p> */}
          <p className="text-paragraphe font-light">coinsin.l@outlook.com</p>
        </div>
        <div className="col-span-1 flex flex-col justify-center gap-y-2 px-2 pr-8">
          <FaPhone size={30} />
          <h3 className="text-small font-normal">{t("contact_phone_title")}</h3>
          {/* <p className="text-footnote font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, esse
            nam
          </p> */}
          <p className="text-paragraphe font-light">+33 6 38 04 20 59</p>
        </div>
        <div className="col-span-1 flex flex-col justify-center gap-y-2 px-2 pr-8">
          <FaLinkedin size={30} />
          <h3 className="text-small font-normal">LinkedIn</h3>
          {/* <p className="text-footnote font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, esse
            nam
          </p> */}
          <p className="text-paragraphe font-light">@leo-coinsin</p>
        </div>
      </div>
      {/* <div className="h-[60px]" />
      <div className="flex flex-col gap-5">
        <div className="text-paragraphe flex flex-row items-center gap-4 font-extralight">
          <div className="flex h-[40pt] w-[40pt] items-center justify-center rounded-full border border-black">
            <Mail size={30} strokeWidth={0.7} />
          </div>
          coinsin.l@outlook.com
        </div>
        <div className="text-paragraphe flex flex-row items-center gap-4 font-extralight">
          <div className="flex h-[40pt] w-[40pt] items-center justify-center rounded-full border border-black">
            <Phone size={30} strokeWidth={0.7} />
          </div>
          +33 6 38 04 20 59
        </div>
        <div className="text-paragraphe flex flex-row items-center gap-4 font-extralight">
          <div className="flex h-[40pt] w-[40pt] items-center justify-center rounded-full border border-black">
            <LinkedinIcon size={30} strokeWidth={0.7} />
          </div>
          leo-coinsin
        </div>
      </div> */}
    </div>
  );
}

export default Contact;
