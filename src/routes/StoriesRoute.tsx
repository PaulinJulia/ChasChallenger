import { Stories } from "../components/Stories";
import style from "./StoriesRoute.module.css";

export const StoriesRoute = () => {
  return (
    <main>
      <h2 className={style.heading}>STAYIN ALIVE</h2>
      <Stories />
    </main>
  );
};
