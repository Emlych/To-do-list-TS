import { Dispatch, FC, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface LightProps {
  light: boolean;
  setLight: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<LightProps> = ({ light, setLight }) => {
  return (
    <div className="header">
      <div className="container header__container">
        <div className="title">
          <FontAwesomeIcon icon={faListAlt} />
          <h1>Todo List</h1>
        </div>
        <div className="toggle__button">
          <button
            className={light ? `switch switch-light` : "switch "}
          ></button>
          <button
            onClick={() => setLight(!light)}
            className={light ? `slider slider-light` : "slider"}
          >
            {light ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
