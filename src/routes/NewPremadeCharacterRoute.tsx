import axios from "axios";
import Character from "../types/Character";
import style from "./NewPremadeCharacterRoute.module.css";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

const premades: Character[] = [
  {
    name: "Jonas Eriksson",
    age: 58,
    gender: "Man",
    healthPoints: 10,
    strength: 15,
    dexterity: 8,
    intelligence: 13,
    wisdom: 14,
    constitution: 12,
    charisma: 10,
    backstory:
      "Jonas Eriksson, en 58-årig robust snickare, hade ägnat hela sitt liv åt att arbeta med händerna. Redan som ung visade han en medfödd talang för hantverk och en kärlek till doften av nyhugget trä. När han växte upp i en liten by inbäddad i de skandinaviska bergen, lärde Jonas konsten att bearbeta trä av sin far, som också var en skicklig snickare. När han finslipade sina färdigheter under åren utvecklade Jonas en djup uppskattning för skönheten och styrkan som kunde skapas av enkla träbitar.",
    profession: "Snickare",
    species: "Människa",
    imageURL: "/src/assets/images/person4.png",
    favourite: false,
  },
  {
    name: "Emma Lund",
    age: 26,
    gender: "Kvinna",
    healthPoints: 10,
    strength: 10,
    dexterity: 14,
    intelligence: 12,
    wisdom: 8,
    constitution: 15,
    charisma: 13,
    backstory:
      "Emma Lund föddes i en liten by i utkanten av staden. När hon växte upp visste hon alltid att hon ville bli lärare och inspirera de unga att nå sin fulla potential. Hon utmärkte sig i sina studier och tog examen i toppen av sin klass med en examen i utbildning från det lokala universitetet. Vid 26 år gammal hade Emma redan gjort sig känd som en snäll men ändå bestämd person som verkligen brydde sig om sina elever.",
    profession: "Lärare",
    species: "Människa",
    imageURL: "/src/assets/images/person1.png",
    favourite: false,
  },
  {
    name: "Eli Sjöö",
    age: 73,
    gender: "Icke-binär",
    healthPoints: 10,
    strength: 12,
    dexterity: 8,
    intelligence: 13,
    wisdom: 15,
    constitution: 10,
    charisma: 14,
    backstory:
      "Eli Sjöö är född och uppvuxen i en liten by i Sverige. Hen har alltid varit fascinerad av lastbilar och den öppna vägen från en ung ålder. Så snart hen var gammal nog började Eli arbeta som lastbilschaufför och korsade hemlandets slingrande vägar. Hens skarpa kvickhet och orädda uppträdande gav hen snabbt respekt från sina kamrater ute på vägarna.",
    profession: "Lastbilsförare",
    species: "Människa",
    imageURL: "/src/assets/images/person2.png",
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
        <h1>Färdiga Karaktärer</h1>
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
