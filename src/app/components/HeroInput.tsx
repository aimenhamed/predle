"use client";

import { CompleteHero } from "@/lib/types";
import { useState } from "react";
import Attributes from "./Attributes";
import Select from "react-select";

type HeroInputProps = {
  todaysHero: CompleteHero;
  heroes: CompleteHero[];
};

function formatName(name: string) {
  if (name === "The Fey") {
    return "fey";
  }
  return name.replace(" ", "-").replace(".", "").toLowerCase();
}

export default function HeroInput({ todaysHero, heroes }: HeroInputProps) {
  const [value, setValue] = useState<CompleteHero>();
  const [guesses, setGuesses] = useState<CompleteHero[]>([]);
  const [correct, setCorrect] = useState<boolean>(false);
  const [unguessedHeroes, setUnguessedHeroes] =
    useState<CompleteHero[]>(heroes);

  const guess = async () => {
    if (!value) return;
    if (value.name === todaysHero.name) {
      setCorrect(true);
      return;
    }
    setValue(undefined);
    setGuesses([...guesses, value]);
    setUnguessedHeroes(unguessedHeroes.filter((uh) => uh.name !== value.name));
    if (guesses.length === 5) {
      setCorrect(true);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Select
          options={unguessedHeroes.map((uh) => ({ label: uh.name, value: uh }))}
          onChange={(e) => e?.value && setValue(e.value)}
          styles={{
            control: (styles) => ({ ...styles, width: "25rem" }),
            option: (styles) => ({ ...styles, color: "black" }),
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "#DEEBFF",
              primary: "#4C9AFF",
            },
          })}
        />
        <button onClick={guess} disabled={!value}>
          Enter
        </button>
      </div>
      {correct && <>Correct! Today&apos;s hero is: {todaysHero.name}</>}
      <h3 style={{ margin: "2rem 0" }}>Guesses {guesses.length}:</h3>
      {guesses.length > 0 && (
        <ul>
          {guesses.map((guess) => (
            <div
              key={guess.id}
              className="flex text-3xl"
              style={{ marginBottom: "1rem" }}
            >
              <img
                src={`https://predecessor.pro/images/heroes/portraits/${formatName(
                  guess.name
                )}.webp`}
                className="h-40 w-40"
                style={{ marginRight: "0.5rem" }}
              />
              <Attributes hero={guess} todaysHero={todaysHero} />
            </div>
          ))}
        </ul>
      )}
    </>
  );
}
