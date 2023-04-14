"use client";

import { CompleteHero } from "@/lib/types";
import HeroInput from "./HeroInput";

type MainProps = {
  todaysHero: CompleteHero;
  heroes: CompleteHero[];
};

export default function Main({ todaysHero, heroes }: MainProps) {
  return (
    <div className="flex flex-col items-center text-zinc-50 text-5xl">
      <div className="p-8 bg-neutral-500 bg-opacity-80 rounded-md flex items-center flex-col max-w-sm">
        <h1 className="font-bold underline">Predle</h1>
        <p style={{ margin: "2rem 0" }}>Guess today&apos;s Predecessor hero!</p>
        <HeroInput todaysHero={todaysHero} heroes={heroes} />
      </div>
    </div>
  );
}
