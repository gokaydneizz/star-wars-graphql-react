import React, { useEffect, useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { useNavigate } from "react-router-dom";

export const Characters = () => {
  const { data, loading, error } = useCharacters();
  const [characterName, setCharacterName] = useState("");
  const [squadCharacters, setSquadCharacters] = useState(
    JSON.parse(localStorage.getItem("characters")) || []
  );

  const router = useNavigate();

  // on all changes of squadCharacters, update localstorage as well.
  useEffect(() => {
    if (squadCharacters.length !== 0) {
      localStorage.setItem("characters", JSON.stringify(squadCharacters));
    }
  }, [squadCharacters.length]);

  if (loading)
    return (
      <div className="text-blue-500 text-xl font-extrabold">Loading..</div>
    );

  if (error) {
    <div className="text-red-500 text-xl font-extrabold">
      Something went wrong..
    </div>;
  }

  const addToSquatHandler = (person) => {
    const checkSameSpecies = squadCharacters.find(
      (char) => char?.species?.name === person?.species?.name
    );

    if (!checkSameSpecies) {
      setSquadCharacters((prev) => [...squadCharacters, person]);
    }
  };

  const deleteFromSquatHandler = (person) => {
    const filteredSquad = squadCharacters.filter(
      (char) => char.id !== person.id
    );
    setSquadCharacters(filteredSquad);
  };

  return (
    <>
      <input
        onChange={(e) => setCharacterName(e.target.value)}
        type="text"
        className="text-white bg-gray-500 outline-none border-r-emerald-500 rounded-lg overflow-hidden w-[300px] p-2"
      />
      <div className="flex flex-wrap justify-around gap-3 cursor-pointer">
        {data?.allPeople
          ?.filter((character) => {
            return character.name
              .toLowerCase()
              .includes(characterName.toLowerCase());
          })
          ?.map((person) => (
            <div
              key={person.id}
              className="p-3 text-center flex-col justify-between align-middle"
            >
              <img
                src={person?.image}
                onClick={() => router(`/${person.id}`)}
              />
              <p className="mt-1">{person.name}</p>
              <p>{person?.birthYear}</p>
              <button
                onClick={() =>
                  !squadCharacters.find((char) => char.id === person.id)
                    ? addToSquatHandler(person)
                    : deleteFromSquatHandler(person)
                }
                disabled={
                  squadCharacters.length >= 5 &&
                  !squadCharacters.find((char) => char.id === person.id)
                }
                className="bg-gray-400 p-2 rounded-md mt-2 hover:bg-gray-700 hover:text-white disabled:pointer-events-none disabled:opacity-20"
              >
                {!squadCharacters.find((char) => char.id === person.id)
                  ? "Add to Squad"
                  : "Delete From Squad"}
              </button>
            </div>
          ))}
      </div>
    </>
  );
};
