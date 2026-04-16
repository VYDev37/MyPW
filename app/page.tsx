import { NavBar, PackedComp } from "@/components";


export default async function Main() {
  await new Promise(r => setTimeout(r, 1500));

  return (
    <div className="flex flex-col min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <NavBar />

      <main className="flex-1 w-full">
        <PackedComp />
      </main>
    </div>
  );
}
