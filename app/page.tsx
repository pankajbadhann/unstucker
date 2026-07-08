import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center p-24 bg-[pink]">
      <Image
        src="/icon.png"
        alt="abc"
        width={1000}
        height={1000}
      />
    </div>
  );
}
