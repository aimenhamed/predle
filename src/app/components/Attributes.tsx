"use client";

import { CompleteHero } from "@/lib/types";

type AttributesProps = {
  hero: CompleteHero;
  todaysHero: CompleteHero;
};

export default function Attributes({ hero, todaysHero }: AttributesProps) {
  const todaysHeroPowerTypes = todaysHero.powerType.map((pt) => pt.powerType);
  const todaysHeroPositions = todaysHero.heroPosition.map((hp) => hp.position);

  const powerTypeOverlap = hero.powerType.find((pt) =>
    todaysHeroPowerTypes.includes(pt.powerType)
  );
  const positionOverlap = hero.heroPosition.find((hp) =>
    todaysHeroPositions.includes(hp.position)
  );

  return (
    <>
      <div
        className={`flex justify-center items-center box-border h-40 w-40
                 ${
                   todaysHero.name === hero.name ? "bg-green-500" : "bg-red-500"
                 }`}
        style={{ margin: "0 0.5rem" }}
      >
        {hero.name}
      </div>
      <div
        className={`flex justify-center items-center box-border h-40 w-40
                 ${
                   todaysHero.gender === hero.gender
                     ? "bg-green-500"
                     : "bg-red-500"
                 }`}
        style={{ margin: "0 0.5rem" }}
      >
        {hero.gender}
      </div>
      <div
        className={`flex justify-center items-center box-border h-40 w-40
        ${
          todaysHero.rangeType === hero.rangeType
            ? "bg-green-500"
            : "bg-red-500"
        }`}
        style={{ margin: "0 0.5rem" }}
      >
        {hero.rangeType}
      </div>
      <div
        className={`flex justify-center items-center box-border h-40 w-40
        ${positionOverlap ? "bg-green-500" : "bg-red-500"}`}
        style={{ margin: "0 0.5rem" }}
      >
        {
          (positionOverlap
            ? positionOverlap.position
            : hero.heroPosition[0].position) as string
        }
      </div>
      <div
        className={`flex justify-center items-center box-border h-40 w-40
        ${powerTypeOverlap ? "bg-green-500" : "bg-red-500"}`}
        style={{ margin: "0 0.5rem" }}
      >
        {
          (powerTypeOverlap
            ? powerTypeOverlap.powerType
            : hero.powerType[0].powerType) as string
        }
      </div>
    </>
  );
}
