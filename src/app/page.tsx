import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Image src="/logo.svg" width={50} height={50} alt="logo" />
      <p>Qatoto</p>
    </div>
  );
}
