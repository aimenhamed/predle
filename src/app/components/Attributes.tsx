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
        className={`flex justify-center items-center box-border h-12 w-12
                 bg-${
                   todaysHero.name === hero.name ? "green" : "red"
                 }-500 m4 text-xs`}
        style={{ marginRight: "0.5rem" }}
      >
        {hero.name}
      </div>
      <div
        className={`flex justify-center items-center box-border h-12 w-12
                 bg-${
                   todaysHero.gender === hero.gender ? "green" : "red"
                 }-500 m4 text-xs`}
        style={{ marginRight: "0.5rem" }}
      >
        {hero.gender}
      </div>
      <div
        className={`flex justify-center items-center box-border h-12 w-12
        bg-${
          todaysHero.rangeType === hero.rangeType ? "green" : "red"
        }-500 m4 text-xs`}
        style={{ marginRight: "0.5rem" }}
      >
        {hero.rangeType}
      </div>
      <div
        className={`flex justify-center items-center box-border h-12 w-12
        bg-${positionOverlap ? "green" : "red"}-500 m4 text-xs`}
        style={{ marginRight: "0.5rem" }}
      >
        {
          (positionOverlap
            ? positionOverlap.position
            : hero.heroPosition[0].position) as string
        }
      </div>
      <div
        className={`flex justify-center items-center box-border h-12 w-12
        bg-${powerTypeOverlap ? "green" : "red"}-500 m4 text-xs`}
        style={{ marginRight: "0.5rem" }}
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
