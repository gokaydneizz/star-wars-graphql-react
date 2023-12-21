import { useQuery } from "@apollo/client";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

const CharacterDetails = () => {
  const { id } = useParams();

  const router = useNavigate();

  const { data, loading, error } = useCharacter(id);

  if (loading)
    return (
      <div className="text-blue-500 text-xl font-extrabold">Loading..</div>
    );

  if (error) {
    <div className="text-red-500 text-xl font-extrabold">
      Something went wrong..
    </div>;
  }

  return (
    <div className="max-w-30 mx-auto mt-4">
      <p
        onClick={() => router("/")}
        className="font-extrabold cursor-pointer mb -7"
      >
        {" "}
        {"<"}--------{" "}
      </p>
      <h1 className="font-semibold text-2xl">{data?.person?.name}</h1>
      <img
        className="w-[500px] my-10"
        src={data?.person.image}
        alt="character-img"
      />
      <p className="font-semibold text-2xl capitalize ">
        {data?.person?.gender}
      </p>
      <p className="font-semibold text-2xl">{data?.person?.birthYear}</p>
    </div>
  );
};

export default CharacterDetails;
