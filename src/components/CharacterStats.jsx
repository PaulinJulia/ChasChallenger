import React from "react";
import style from "./CharacterStats.module.css";

function CharacterStatsContainer({ character }) {
  return (
    <div className={style["stats-wrapper"]}>
      <h2 className={style.stats}>
      Karaktärsdetaljer
      </h2>
      <div className="">
        <div className={style.icons}>
          <img
            src="/images/heart.png"
            className={style["icon-image"]}
            alt="heart"
          />

          <img
            src="/images/glass.png"
            className={style["icon-image"]}
            alt="glass"
          />
          <img
            src="/images/armor.png"
            className={style["icon-image"]}
            alt="armor"
          />
        </div>

        <div className={style["all-stats"]}>
          <p>Ålder: {character.age}</p>
          <p>Kön: {character.gender}</p>
          <p>Strength: {character.strength}</p>
          <p>Dexterity: {character.dexterity}</p>
          <p>Intelligence: {character.intelligence}</p>
          <p>Wisdom: {character.wisdom}</p>
          <p>Constitution: {character.constitution}</p>
          <p>Charisma: {character.charisma}</p>
          <p>Art: {character.species}</p>
          <p>Yrke: {character.profession}</p>
          <p>Bakgrund: {character.backstory}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterStatsContainer;
