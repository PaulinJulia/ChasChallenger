import axios from "axios";
import Character from "../types/Character";
import style from "./NewPremadeCharacterRoute.module.css";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

const premades: Character[] = [
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
];

const handleCharacterClicked = async (
  character: Character,
  navigate: NavigateFunction
) => {
  await axios.post(
    /* "http://localhost:5106/api/Character/AddCharacter", */
    /* `https://localhost:7110/api/Character/AddCharacter`, */
    /* `52.149.227.5:8081/api/Character/AddCharacter`, */
    /* `https://chasfantasy.azurewebsites.net/api/Character/AddCharacter`, */
    `/api/Character/AddCharacter`,

    { ...character, level: 0 }
  );
  navigate("../..", { relative: "path", replace: true });
};

export const NewPremadeCharacterRoute = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className={style["premade-character"]}>
        <h1>Färdiggjorda Karaktärer</h1>
        <ul className={style.charactersList}>
          {premades.map((character: Character, index: number) => {
            return (
              <li
                className={style.character}
                key={character.name + index}
                onClick={() => handleCharacterClicked(character, navigate)}
              >
                <h2>{character.name}</h2>
                <img
                  src={character.imageURL}
                  alt={`${character.name}'s icon`}
                  loading="lazy"
                  onError={(error) =>
                    ((error.target as HTMLImageElement).src =
                      "/images/defaultCharacterIcon.png")
                  }
                />
                <div className={style.traits}>
                  <div className={style.strings}>
                    <h3>Art</h3>
                    <p className="capitalize">{character.species}</p>
                  </div>
                  <div className={style.strings}>
                    <h3>Kön</h3>
                    <p className="capitalize">{character.gender}</p>
                  </div>
                  <div className={style.strings}>
                    <h3>Yrke</h3>
                    <p className="capitalize">{character.profession}</p>
                  </div>
                </div>
                <div className={style.traits}>
                  <div className={style.numbered}>
                    <h3>Ålder</h3>
                    <p>{character.age}</p>
                  </div>
                  <div className={style.numbered}>
                    <h3>HP</h3>
                    <p>{character.healthPoints}</p>
                  </div>
                </div>
                <div className={style.attributes}>
                  <div className={style.numbered}>
                    <h3>Strength</h3>
                    <p>{character.strength}</p>
                  </div>
                  <div className={style.numbered}>
                    <h3>Dexterity</h3>
                    <p>{character.dexterity}</p>
                  </div>
                  <div className={style.numbered}>
                    <h3>Intelligence</h3>
                    <p>{character.intelligence}</p>
                  </div>
                  <div className={style.numbered}>
                    <h3>Wisdom</h3>
                    <p>{character.wisdom}</p>
                  </div>
                  <div className={style.numbered}>
                    <h3>Constitution</h3>
                    <p>{character.constitution}</p>
                  </div>
                  <div className={style.numbered}>
                    <h3>Charisma</h3>
                    <p>{character.charisma}</p>
                  </div>
                </div>
                <div className={style.strings}>
                  <h3>Bakgrund </h3>
                  <p>{character.backstory}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <Link className={style["back-button"]} relative="path" to="..">
          Tillbaka
        </Link>
      </main>
    </>
  );
};
