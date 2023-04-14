import fetcher from "@/lib/fetcher";
import { CompleteHero } from "@/lib/types";
import testData from "./data";
import Main from "./components/Main";

export default async function Home() {
  // const res = (await fetcher("/api/heroes")) as {
  //   todaysHero: CompleteHero;
  //   heroes: CompleteHero[];
  // };
  const res = testData as {
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
