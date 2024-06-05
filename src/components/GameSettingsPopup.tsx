import style from "./GameSettingsPopup.module.css";
import { GameSettingsPopupProps } from "../types/types";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

export function GameSettingsPopup(props: GameSettingsPopupProps) {
  const handleHistory = () => {
    console.log("Vad är detta för knapp?");
  };

  const handleSaveGame = () => {
    const save = "Allt finns redan:)";
    console.log(save);
    //createResumeStory(save);
  };
  return props.trigger ? (
    <div className={style.popup}>
      <div className={style["popup-inner"]}>
        <IoIosCloseCircleOutline
          title="Close"
          className={style["close-button"]}
          onClick={() => props.setTrigger(false)}
        />
        <div className={style["settings-card"]}>
          <p className={style.text}>NOW PLAYING</p>
          <p className={style.text}>Character</p>
        </div>
        <div className={style["settings-card"]}>
          <p className={style.text}>You</p>
          <p className={style.text}>Name</p>
        </div>
        <div className={style["settings-buttons"]}>
          <button
            title="History"
            className={style["settings-button"]}
            onClick={handleHistory}
          >
            History
          </button>
          <Link to="/characters">
            <button
              title="Save Game"
              className={style["settings-button"]}
              onClick={handleSaveGame}
            >
              Save Game
            </button>
          </Link>
          <Link to="/characters">
            <button title="Exit Game" className={style["settings-button"]}>
              Exit Game
            </button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
