import Hero from "./_components/hero";

export const metadata = {
  title: "Conor Lee Yuen | Home",
  description: "I'm a full-stack developer based in Brooklyn, NY",
  icon: "/favicon.png",
}

export default async function Home() {
  return (
    <main className="w-full h-screen bg-[#F4EAEA] dark:bg-slate-500 text-[#252525] dark:text-slate-100">
      <Hero />
    </main>
  );
}