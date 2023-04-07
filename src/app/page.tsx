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
      <div className="flex flex-col h-screen items-center">
        <div className="p-8 bg-neutral-500 bg-opacity-80 rounded-md flex items-center flex-col w-96">
          <h1 className="text-3x1 font-bold underline text-zinc-50">Predle</h1>
          <p className="text-zinc-50" style={{ marginBottom: "2rem" }}>
            Guess today&apos;s Predecessor hero!
          </p>
          <HeroInput todaysHero={res.todaysHero} heroes={res.heroes} />
        </div>
      </div>
    </div>
  );
}
