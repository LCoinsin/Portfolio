import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

function Contact({ id }: { id: string }) {
  const { t } = useTranslation();

  return (
    <div id={id}>
      <h1 className="text-medium sm:text-large text-black">
        {t("contact_title")}
        <span className="text-primary">.</span>
      </h1>
      <div className="h-[60px]" />
      <div className="lg:col-span-3">
        <div className="text-paragraphe flex flex-row items-center gap-4 font-extralight">
          <div className="flex h-[40pt] w-[40pt] items-center justify-center rounded-full border border-black">
            <Mail size={30} strokeWidth={0.7} />
          </div>
          coinsin.l@outlook.com
        </div>
      </div>
    </div>
  );
}

export default Contact;
