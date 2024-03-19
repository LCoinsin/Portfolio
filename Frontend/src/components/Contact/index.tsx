import { Phone, Mail } from "lucide-react";

function Contact() {
  return (
    <>
      <h1 className="text-large text-black">
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
        {/* <form action="#" className="space-y-4">
          <div>
            <input
              className="w-full rounded-lg border p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <input
                className="w-full rounded-lg border p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <input
                className="w-full rounded-lg border p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div>
            <textarea
              className="w-full rounded-lg border p-3 text-sm min-h-32"
              placeholder="Message"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Contact
            </button>
          </div>
        </form> */}
      </div>
    </>
  );
}

export default Contact;
