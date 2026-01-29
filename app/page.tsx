import { NavBar, PackedComp } from "./components";

export default function Main() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      
      <main className="flex-1 w-full">
        <PackedComp />
      </main>
    </div>
  );
}
