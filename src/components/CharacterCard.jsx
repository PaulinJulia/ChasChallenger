import React, { useState } from "react";
import ButtonOne from "./ButtonOne";
import { Link, useNavigate } from "react-router-dom";
import CharacterStatsContainer from "./CharacterStats";
import style from "./CharacterCard.module.css";

function CharacterCard({ character, onDelete, onFavorite, onSelect }) {
  const [showStats, setShowStats] = useState(false);

  const toggleStats = () => {
    setShowStats(!showStats);
  };

  const showCharacterStats = (character) => {
    console.log("Stats:", character);
    toggleStats();
  };

  return (
    <li className={style.card} onClick={() => onSelect(character)}>
      <div className={style["button-wrapper"]}>
        <button
          className={style["card-button"]}
          type="button"
          title="About"
          onClick={(e) => {
            e.stopPropagation();
            showCharacterStats(character);
          }}
        >
          <img
            src="/images/info.png"
            className={style["button-icon"]}
            alt="About character"
          />
        </button>
        <button
          className={style["card-button"]}
          type="button"
          title="Favorite"
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(character);
          }}
        >
          <img
            src="/images/favorite.png"
            className={style["button-icon"]}
            alt="Favorite character"
          />
        </button>
        <button
          className={style["card-button"]}
          type="button"
          title="Delete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(e.target.closest("li"), character);
          }}
        >
          <img
            src="/images/trash.png"
            className={style["button-icon"]}
            alt="Delete character"
          />
        </button>
      </div>

      <div className={style["image-stats-wrapper"]}>
        <img
          src={character.imageURL}
          alt="character"
          className={style["character-image"]}
        />
        <h2 className={style["character-name"]}>{character.name}</h2>
        {showStats && <CharacterStatsContainer character={character} />}
      </div>

      {/* 
			<div>
				<button></button>

				<p>{character.class}</p>
				<p>lvl {character.level}</p>
				<p>{character.hitpoints} hp</p>
			</div> */}
    </li>
  );
}

export default CharacterCard;
