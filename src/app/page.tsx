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

      <div className="w-[640px] pl-12 flex items-center gap-2 bg-amber-500">
        <Form
          action="/search"
          className="w-full h-[40px] flex items-center bg-green-500 border-[#CCE8E9] border-1 rounded-full"
        >
          {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
          <input
            type="search"
            name="query"
            id="search-bar"
            placeholder="Search"
            className="h-[40px] w-full px-4"
          />
          <button
            type="submit"
            className="bg-[#CCE8E9] w-[50px] h-[40px] cursor-pointer pl-2 rounded-r-full"
          >
            <Image
              src="/search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
              width={24}
              height={24}
              alt="Search with your voice"
              className="w-[24px] h-[24px]"
            />
          </button>
        </Form>
        <Image
          src="/mic_24dp_1F1F1F_FILL0_wght0_GRAD0_opszNaN.svg"
          width={40}
          height={40}
          alt="Search with your voice"
          className="w-[40px] h-[40px] bg-[#CCE8E9] p-2 cursor-pointer rounded-full"
        />
      </div>

      <div className="flex gap-2 py-2 pr-6">
        <button
          type="button"
          className="w-10 h-10 flex justify-center items-center border border-[#CCE8E9] rounded-full cursor-pointer"
        >
          <Image
            src="/notifications_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
            width={24}
            height={24}
            alt="Notifications"
          />
        </button>

        <button
          type="button"
          className="w-10 h-10 flex justify-center items-center border border-[#CCE8E9] rounded-full cursor-pointer"
        >
          <Image
            src="/translate_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
            width={24}
            height={24}
            alt="Search with your voice"
          />
        </button>

        <button
          type="button"
          className="h-10 flex items-center px-2.5 gap-2.5 border-[#1DBDC5] border-1 cursor-pointer rounded-full"
        >
          <Image
            src="/account_circle_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
            width={24}
            height={24}
            alt="Search with your voice"
            className="w-[24px] h-[24px]"
          />
          <span className="text-[#1DBDC5] font-medium">Sign in</span>
        </button>
      </div>
    </section>
  );
}
