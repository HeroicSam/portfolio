import Hero from "./_components/hero";
import Cover from "./_components/cover";

export default async function Home() {
  return (
    <main className="w-full h-screen bg-[#F4EAEA] text-[#252525]">
      <Cover />
      <Hero />
    </main>
  );
}