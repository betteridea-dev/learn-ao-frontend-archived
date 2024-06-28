import DumDum from "@/components/hero/dum-dum";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="h-screen p-0 lg:py-6 lg:px-6">
      <div className="bg-black h-full lg:rounded-[4rem] flex flex-col w-full p-2 relative">
        <div className="flex-grow">
          <Hero />
        </div>
        <div className="absolute bottom-0 lg:bottom-2 left-0 w-full">
          <DumDum />
        </div>
      </div>
    </main>
  );
}