import style from "./NewCharacterRoute.module.css";
import { Link } from "react-router-dom";
/* import Footer from "../components/Footer" */

export const NewCharacterRoute = () => {
  return (
    <>
      <main className={style["new-character-route"]}>
        <h1>Ny Karaktär</h1>
        <ul className={style.linksList}>
          <li>
            <Link
              className={style["link"]}
              relative="path"
              to="premade"
              aria-label="Pick from a few pre made characters"
            >
              <h2>Färdig karaktär</h2>
              <p>
                Välj från ett sortiment av färdiggjorda karaktärer med unika
                egenskaper och bakgrundshistorier.
              </p>
            </Link>
          </li>
          <li>
            <Link
              className={style["link"]}
              relative="path"
              to="custom"
              aria-label="Create your own fully custom character with optional help from AI"
            >
              <h2>Egen karaktär</h2>
              <p>
                Skapa din helt egna karaktär från grunden med valfria
                rekommendationer från AI.
              </p>
            </Link>
          </li>
          <li>
            <Link
              className={style.backButton}
              relative="path"
              to=".."
              title="Back"
            >
              <h2>Tillbaka</h2>
            </Link>
          </li>
        </ul>
      </main>
      {/* <Footer /> */}
    </>
  );
};
