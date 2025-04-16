import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Image src="/website_logo.svg" width={107} height={40} alt="logo" />
    </div>
  );
}
