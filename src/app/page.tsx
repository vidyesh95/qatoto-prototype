import Image from "next/image";
export default function Home() {
  return (
    <section className="w-full bg-gray-500 flex">
      <div className="flex pl-5 py-2 bg-amber-800 gap-5">
        <Image
          src="/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
          width={40}
          height={40}
          alt="menu"
          className="bg-red-500 p-2 cursor-pointer"
        />
        <Image
          src="/website_logo.svg"
          className="bg-green-400 self-center cursor-pointer"
          width={107}
          height={40}
          alt="logo"
        />
      </div>
    </section>
  );
}
