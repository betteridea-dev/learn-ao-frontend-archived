import Hero from "@/components/hero/hero";
import dumdum from "@/public/home/dumdum-gun.svg"
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen py-6 px-6">
      <div className="bg-black h-full rounded-[4rem] relative p-2">
        <div className="flex justify-center">
          <div className="w-[453.33px] h-[300px] px-[136.67px] pt-[120px] bg-[#CFF0C5] rounded-tl-[1200px] rounded-tr-[1200px] rounded-bl-xl rounded-br-xl justify-center items-center inline-flex absolute bottom-0">
            <Image src={dumdum} alt="dumdum" />
          </div>
        </div>
        <div className="flex justify-center">
          <Hero />
        </div>
      </div>
    </main>
  );
}
