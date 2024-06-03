import style from "./NewCharacterRoute.module.css";
import { Link } from "react-router-dom";
/* import Footer from "../components/Footer" */

export const NewCharacterRoute = () => {
  return (
    <>
      <main className={style["new-character-route"]}>
        <h1>New Character</h1>
        <ul className={style.linksList}>
          <li>
            <Link
              className={style["link"]}
              relative="path"
              to="premade"
              aria-label="Pick from a few pre made characters"
            >
              <h2>Pre made</h2>
              <p>
                Select from a bla of pre made characters with unique
                characteristics and backstories.
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
              <h2>Custom</h2>
              <p>
                Create your own fully custom character from scratch with
                optional help from AI.
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
              <h2>Back</h2>
            </Link>
          </li>
        </ul>
      </main>
      {/* <Footer /> */}
    </>
  );
};
