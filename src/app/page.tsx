import { CompleteHero } from "@/lib/types";
import Main from "./components/Main";
import { getHeroes } from "@/lib/getHeroes";

export default async function Home() {
  const res = (await getHeroes()) as {
    todaysHero: CompleteHero;
    heroes: CompleteHero[];
  };

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
      <Main todaysHero={res.todaysHero} heroes={res.heroes} />
    </div>
  );
}
