import fetcher from "@/lib/fetcher";
import HeroInput from "./components/HeroInput";
import { CompleteHero } from "@/lib/types";
// import testData from "./data";

export default async function Home() {
  const res = (await fetcher("/api/heroes")) as {
    todaysHero: CompleteHero;
    heroes: CompleteHero[];
  };
  // const res = testData as {
  //   todaysHero: CompleteHero;
  //   heroes: CompleteHero[];
  // };
  return (
    <div
      style={{
        backgroundImage: `url(/pred.jpg)`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
        overflowY: "scroll",
      }}
    >
      <div className="flex flex-col h-screen items-center text-zinc-50 text-5xl">
        <div className="p-8 bg-neutral-500 bg-opacity-80 rounded-md flex items-center flex-col">
          <h1 className="font-bold underline">Predle</h1>
          <p style={{ margin: "2rem 0" }}>
            Guess today&apos;s Predecessor hero!
          </p>
          <HeroInput todaysHero={res.todaysHero} heroes={res.heroes} />
        </div>
      </div>
    </div>
  );
}
