import style from "./NewCharacterRoute.module.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"

export const NewCharacterRoute = () => {
  return (
    <>
    <main>
      <h1>New Character</h1>
      <ul className={style.linksList}>
        <li>
          <Link
            className={style.link}
            relative="path"
            to="premade"
            title="Pick from a few pre made characters"
          >
            Pre made
          </Link>
        </li>
        <li>
          <Link
            className={style.link}
            relative="path"
            to="custom"
            title="Create your own fully custom character with optional help from AI"
          >
            Custom
          </Link>
        </li>
        <li>
          <Link
            className={style.backButton}
            relative="path"
            to=".."
            title="Back"
          >
            Back
          </Link>
        </li>
      </ul>
    </main>
    {/* <Footer /> */}
  </>
  );
};
