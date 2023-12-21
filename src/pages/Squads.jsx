import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Squads = () => {
  const router = useNavigate();

  const [squadCharacters, setSquadCharacters] = useState([]);

  useEffect(() => {
    setSquadCharacters(JSON.parse(localStorage.getItem("characters")));
  }, []);

  if (squadCharacters.length < 3) {
    return (
      <>
        <h1>
          To create and view the squad, you should at least add 3 characters.
        </h1>
        <button
          className="mt-2 p-2 bg-slate-400 text-black rounded-sm"
          onClick={() => router("/")}
        >
          Click to go to the characters screen
        </button>
      </>
    );
  }

  return (
    <div className="w-full">
      <p
        onClick={() => router("/")}
        className="font-extrabold cursor-pointer mb -7"
      >
        {" "}
        {"<"}--------{" "}
      </p>
      <h1 className="text-5xl font-semibold mt-9">SQUAD CHARACTERS</h1>
      <div className="w-full flex flex-wrap mt-10 text-center gap-5 justify-between align-middle">
        {squadCharacters?.map((char) => (
          <div>
            <h1 className="font-semibold text-2xl">{char?.name}</h1>
            <img className="w-[250px]" src={char?.image} alt="character-img" />
            <p className="font-semibold text-2xl capitalize ">
              BirthYear: {char?.birthYear || "No birthyear info"}
            </p>
            <p className="font-semibold text-2xl capitalize ">
              Species: {char?.species?.name || "No species"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Squads;
