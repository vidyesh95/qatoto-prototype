"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <section className="w-full bg-white flex justify-between py-2 pl-5 pr-6">
      {/* Left: Hamburger and Qatoto */}
      <div className="flex items-center gap-5">
        {/* Hamburger menu */}
        <button
          type="button"
          className="w-10 h-10 flex justify-center items-center cursor-pointer"
        >
          <Image
            src="/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
            width={24}
            height={24}
            alt="menu"
          />
        </button>

        {/* Qatoto logo */}
        <button type="button" className="cursor-pointer">
          <Image src="/website_logo.svg" width={107} height={40} alt="logo" />
        </button>
      </div>

      {/* Center: Search bar */}
      <search
        className={`w-160 flex items-center gap-2 transition-all ${
          isSearchActive ? "pl-5" : "pl-12"
        }`}
      >
        <form
          action="/search"
          className="flex h-10 flex-1 items-center border-[#CCE8E9] border rounded-full relative"
        >
          {/* Search icon that appears when active */}
          {isSearchActive && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <Image
                src="/search_24dp_9CA3AF_FILL0_wght400_GRAD0_opsz24.svg"
                width={24}
                height={24}
                alt="Search"
              />
            </div>
          )}

          {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
          <input
            type="search"
            name="query"
            id="search-bar"
            placeholder="Search"
            className={`h-10 flex-1 px-4 overflow-hidden bg-transparent outline-none ${
              isSearchActive ? "pl-11" : ""
            }`}
            onFocus={() => setIsSearchActive(true)}
            onBlur={(e) => !e.target.value && setIsSearchActive(false)}
            onChange={(e) => setIsSearchActive(!!e.target.value)}
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
        </form>

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
      </search>

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
