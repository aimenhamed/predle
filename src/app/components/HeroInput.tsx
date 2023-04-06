"use client";

import { useState } from "react";

type HeroInputProps = {
  todaysHero: string;
  heroes: any[];
};

export default function HeroInput({ todaysHero, heroes }: HeroInputProps) {
  const [value, setValue] = useState<string>("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [correct, setCorrect] = useState<boolean>(false);

  const guess = async () => {
    if (value === todaysHero) {
      setCorrect(true);
      alert("Correct!");
    } else {
      setValue("");
      setGuesses([...guesses, value]);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <select onChange={(e) => setValue(e.target.value)}>
          {heroes.map((h, idx) => (
            <option key={h.name + idx} value={h.name}>
              {h.name}
            </option>
          ))}
        </select>
        <button onClick={guess}>Enter</button>
      </div>
      {correct && <>Correct! Today&apos;s hero is: {todaysHero}</>}
      <h3>Previous guesses {guesses.length}:</h3>
      {guesses.length > 0 && (
        <div>
          <ul>
            {guesses.map((guess) => (
              <li key={guess}>{guess}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
