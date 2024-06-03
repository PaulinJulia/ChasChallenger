import style from "./CharactersRoute.module.css";
import Character from "../types/Character";
import CharacterCard from "../components/CharacterCard";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedCharacterId } from "../Store/Slices/CharacterSlice";
import axios from "axios";
import { CharacterId } from "../types/CharacterId";

/* import Footer from "../components/Footer"; */
import Profession from "../types/Profession";
import Species from "../types/Species";

const handleDeleteCharacterClicked = async (
  characters: Character[],
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>,
  id?: number
) => {
  //TODO: maybe disable on favorited characters
  //TODO: some sort of confirmation

  try {
    if (!id) throw "Character ID is undefined";

    /*const response =*/ await axios.delete(
      /* "https://chasfantasy.azurewebsites.net/api/Character/DeleteCharacter", */
      "/api/Character/DeleteCharacter",
      {
        data: {
          id: id,
        },
      }
    );

    //Remove visually
    setCharacters([...characters.filter((character) => character.id != id)]);
  } catch (error) {
    console.error(error);
  }
};

const handleFavoriteCharacterClicked = () => {
  console.warn("Not yet implemented");
};

const getCharacters = async (): Promise<Character[] | undefined> => {
  try {
    const response = await axios.get(
      /* "http://localhost:5106/api/Character/GetCharacters" */
      /* `https://localhost:7110/api/Character/GetCharacters`  */
      /* `52.149.227.5:8081/api/Character/GetCharacters`, */
      `https://chasfantasy.azurewebsites.net/api/Character/GetCharacters`
      // `/api/Character/GetCharacters`
    );

    return await response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const CharactersRoute = () => {
  const navigate = useNavigate();

  // const [characters, setCharacters] = useState<Character[]>([]);
  const [characters, setCharacters] = useState<Character[]>([
    {
      name: "Abc",
      age: 20,
      gender: "Man",
      healthPoints: 10,
      strength: 15,
      dexterity: 14,
      intelligence: 13,
      wisdom: 12,
      constitution: 10,
      charisma: 8,
      backstory:
        "My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory My backstory",
      profession: "Snickare",
      species: "Människa",
      imageURL: "https://avatars.githubusercontent.com/u/72140147?v=4",
      favourite: false,
    },
    {
      name: "123",
      age: 30,
      gender: "Kvinna",
      healthPoints: 10,
      strength: 15,
      dexterity: 14,
      intelligence: 13,
      wisdom: 12,
      constitution: 10,
      charisma: 8,
      backstory: "My backstory",
      profession: "Lärare",
      species: "Människa",
      imageURL: "",
      favourite: false,
    },
    {
      name: "Abc123",
      age: 40,
      gender: "Icke-binär",
      healthPoints: 10,
      strength: 15,
      dexterity: 14,
      intelligence: 13,
      wisdom: 12,
      constitution: 10,
      charisma: 8,
      backstory: "My backstory",
      profession: "Förare",
      species: "Människa",
      imageURL: "",
      favourite: false,
    },
  ]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async () => {
  //     setCharacters((await getCharacters()) as Character[]);
  //   })();
  // }, []);

  const handleCharacterClicked = (character: Character) => {
    //TODO: set selected character and move on to next route in flow
    console.log(character.id, "selected!");
    const id = character.id;
    dispatch(selectedCharacterId(id));

    const charactersListFromLocal: CharacterId[] = JSON.parse(
      localStorage.getItem("activeStory") || "[]"
    );

    if (charactersListFromLocal) {
      const storyTrue = charactersListFromLocal.find(
        (item) => item.id === id && item.activeStory === true
      );
      if (storyTrue) {
        navigate("/adventure", { replace: true });
      } else {
        navigate("/stories", { replace: true });
      }
    } else {
      navigate("/stories", { replace: true });
    }
  };
  return (
    <main className={style["characters-route"]}>
      <h1>Dina Karaktärer</h1>
      <Link className={style["link"]} relative="path" to="new">
        Skapa karaktär
      </Link>
      <ul className={style["characters-list"]}>
        {characters.map((character, index) => {
          return (
            <CharacterCard
              key={character.name + index}
              character={character}
              onDelete={() =>
                handleDeleteCharacterClicked(
                  characters,
                  setCharacters,
                  character.id
                )
              }
              onFavorite={handleFavoriteCharacterClicked}
              onSelect={handleCharacterClicked}
            />
          );
        })}
      </ul>
    </main>
  );
};
