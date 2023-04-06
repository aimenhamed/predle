import fetcher from "@/lib/fetcher";
import HeroInput from "./components/HeroInput";

export default async function Home() {
  const res = await fetcher("/api/heroes");
  const heroes = res.heroes;

  const hero = heroes[Math.floor(Math.random() * heroes.length)];
  return (
    <>
      <h1>Predle</h1>
      <div>Guess today&apos;s Predecessor hero!</div>
      <HeroInput todaysHero={hero.name} heroes={heroes} />
    </>
  );
}
