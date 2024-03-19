import { Phone, Mail } from "lucide-react";

function Contact() {
  return (
    <>
      <h1 className="text-medium sm:text-large text-black">
        Contact me<span className="text-primary">.</span>
      </h1>
      <div className="h-[60px]" />
      <div className="lg:col-span-3">
        <div className="flex flex-row gap-4 text-paragraphe font-extralight items-center">
          <div className="w-[40pt] h-[40pt] border border-black rounded-full flex justify-center items-center">
            <Mail size={30} strokeWidth={0.7} />
          </div>
          coinsin.l@outlook.com
        </div>
      </div>
    </>
  );
}

export default Contact;
