import Image from "next/image";
import Form from "next/form";

export default function Home() {
  return (
    <section className="w-full bg-gray-500 flex justify-between">
      <div className="flex pl-5 py-2 bg-amber-800 gap-5">
        <Image
          src="/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
          width={40}
          height={40}
          alt="menu"
          className="bg-red-500 w-[40px] h-[40px] p-2 cursor-pointer"
        />
        <Image
          src="/website_logo.svg"
          className="bg-green-400 self-center cursor-pointer"
          width={107}
          height={40}
          alt="logo"
        />
      </div>

      <div className="flex gap-2">
        <Form action="/search">
          {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
          <input
            type="search"
            name="query"
            id="search-bar"
            placeholder="Search"
          />
          <button type="submit">
            <Image
              src="/search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
              width={40}
              height={40}
              alt="Search with your voice"
              className="bg-[#CCE8E9] p-2 cursor-pointer"
            />
          </button>
        </Form>
        <Image
          src="/mic_24dp_1F1F1F_FILL0_wght0_GRAD0_opszNaN.svg"
          width={40}
          height={40}
          alt="Search with your voice"
          className="bg-[#CCE8E9] p-2 cursor-pointer rounded-full"
        />
      </div>

      <div className="bg-amber-600 flex gap-2 py-2 pr-6">
        <Image
          src="/notifications_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
          width={40}
          height={40}
          alt="Notifications"
          className="border-[#CCE8E9] border-1 w-[40px] h-[40px] p-2 cursor-pointer rounded-full"
        />
        <Image
          src="/translate_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
          width={40}
          height={40}
          alt="Search with your voice"
          className="border-[#CCE8E9] border-1 w-[40px] h-[40px] p-2 cursor-pointer rounded-full"
        />
        <div className="h-[40px] flex items-center px-2.5 gap-2.5 border-[#1DBDC5] border-1 cursor-pointer rounded-full">
          <Image
            src="/account_circle_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
            width={24}
            height={24}
            alt="Search with your voice"
            className="w-[24px] h-[24px]"
          />
          <p className="text-[#1DBDC5]">Sign in</p>
        </div>
      </div>
    </section>
  );
}
