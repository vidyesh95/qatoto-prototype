import Image from "next/image";
import Form from "next/form";

export default function Home() {
  return (
    <section className="w-full bg-white flex justify-between py-2 pl-5 pr-6">
      <div className="flex bg-amber-800 gap-5">
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

      {/* Center: Search bar */}
      <div className="w-[640px] pl-12 flex items-center gap-2">
        <Form
          action="/search"
          className="w-full h-[40px] flex items-center border-[#CCE8E9] border rounded-full"
        >
          {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
          <input
            type="search"
            name="query"
            id="search-bar"
            placeholder="Search"
            className="h-10 flex-1 px-4 overflow-hidden bg-transparent outline-none"
          />
          <button
            type="submit"
            className="bg-[#CCE8E9] w-12 h-10 flex pl-2 items-center rounded-r-full cursor-pointer"
          >
            <Image
              src="/search_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
              width={24}
              height={24}
              alt="Search with your voice"
            />
          </button>
        </Form>
        <button
          type="button"
          className="w-10 h-10 flex justify-center items-center bg-[#CCE8E9] rounded-full cursor-pointer"
        >
          <Image
            src="/mic_24dp_1F1F1F_FILL0_wght0_GRAD0_opszNaN.svg"
            width={24}
            height={24}
            alt="Search with your voice"
          />
        </button>
      </div>

      {/* Right: Icons and Sign in */}
      <div className="flex gap-2">
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
