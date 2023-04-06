import HeroInput from "./components/HeroInput";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/heroes");
  const json = await res.json();
  const heroes = json.heroes;

  const hero = heroes[Math.floor(Math.random() * heroes.length)];
  return (
    <>
      <h1>Predle</h1>
      <div>Guess today&apos;s Predecessor hero!</div>
      <HeroInput todaysHero={hero.name} heroes={heroes} />
    </>
  );
}
